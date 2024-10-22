#!/usr/bin/env bash
#
# Runs stylish-haskell on all the Haskell files in the project. If --apply is
# passed, overwrites the files with the styled output. Otherwise, errors if
# differences are detected.

set -eu -o pipefail

builtin cd "$(dirname "${BASH_SOURCE[0]}")/.."

STYLISH_APPLY=0
FILES=()

for arg in "$@"; do
    case "$arg" in
        (--apply) STYLISH_APPLY=1 ;;
        (*) FILES+=("$arg") ;;
    esac
done

function get_files() {
    find . -name .stack-work -prune -o -name "*.hs" -print0
}

function diff_no_fail() {
    diff "$@" || true
}

function check_file_empty() {
    if [[ -n "$(cat $1)" ]]; then
        return 1
    fi
}

if [[ "${#FILES[@]}" == 0 ]]; then
    while read -r -d $'\0'; do
        FILES+=("${REPLY}")
    done < <(get_files)
fi

RUN_STYLISH=$(bash -c 'type -P stylish-haskell' || true)
if [[ -z "${RUN_STYLISH}" ]]; then
    RUN_STYLISH=$(stack exec -- bash -c 'type -P stylish-haskell')
fi

if [[ "$STYLISH_APPLY" == 1 ]]; then
    "${RUN_STYLISH}" --inplace "${FILES[@]}"
else
    TMPFILE="$(mktemp)"
    for FILE in "${FILES[@]}"; do
        # See comments in file
        if [[ "${FILE}" == */CategoriesWithFriends/ActiveGame.hs ]]; then
            continue
        fi

        DIFF_OPTS=(
            --label "${FILE}"
            --label stylish-haskell
            --unified
        )
        "${RUN_STYLISH}" "${FILE}" | diff_no_fail "${DIFF_OPTS[@]}" "${FILE}" - | tee -a "${TMPFILE}"
    done
    if ! check_file_empty "${TMPFILE}"; then
        exit 1
    fi
fi
