# Scattergories

A web project running a multiplayer Scattergories server.

## Quickstart

### Frontend
1. Install [`webdev`](https://dart.dev/tools/webdev)
1. `pub get` within client/
1. `webdev serve`.
1. Go to `http://localhost:8080`

### Backend
1. Install [`stack`](https://docs.haskellstack.org/en/stable/install_and_upgrade/)
1. `stack build`
1. `stack exec scattergories`
1. Go to `http://localhost:8000`

## Development

### Lint Haskell

1. `stack build stylish-haskell hlint`
1. `scripts/run-hlint.sh`
1. `scripts/run-stylish-haskell.sh`

### Add pre-commit git hooks

1. Install [`pre-commit`](https://pre-commit.com/)
1. `pre-commit install`
