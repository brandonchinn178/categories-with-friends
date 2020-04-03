#!/usr/bin/env bash
#
# Compile the `index.html` file as appropriate for development or production.
#
# This script is a bit of hack. Ideally, it would be nice if Dart could allow
# index.html to be a bit more configurable.

set -eu -o pipefail

builtin cd "$(dirname "${BASH_SOURCE[0]}")/.."

USAGE='"
usage: $0 [--prod]

Compile the \`index.html\` file as appropriate for development or production.

Arguments:
--prod   Compile the file for production
"'

PROD=0

while [[ $# -gt 0 ]]; do
    case "$1" in
        (--prod) PROD=1 ;;
        (--help) eval echo "${USAGE}"; exit 0 ;;
        (*) eval echo "${USAGE}"; exit 1 ;;
    esac
    shift
done

if [[ "${PROD}" == 1 ]]; then
    STATICPATH=static
else
    STATICPATH=
fi

set -x

sed \
    -e "s/\${STATICPATH}/${STATICPATH}/g" \
    web/index.html.template \
    > web/index.html
