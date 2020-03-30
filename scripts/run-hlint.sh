#!/usr/bin/env bash

set -eu -o pipefail

builtin cd "$(dirname "${BASH_SOURCE[0]}")/.."

HLINT=$(bash -c 'type -P hlint' || true)
if [[ -z "${HLINT}" ]]; then
    HLINT=$(stack exec -- bash -c 'type -P hlint')
fi

exec "${HLINT}" .
