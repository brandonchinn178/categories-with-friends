# Scattergories

A web project running a multiplayer Scattergories server.

## Quickstart

1. Install language tools
    1. Install Dart
        ```bash
        brew tap dart-lang/dart
        brew install dart
        ```

    1. Install [`webdev`](https://dart.dev/tools/webdev)
    1. Install [`stack`](https://docs.haskellstack.org/en/stable/install_and_upgrade/)

1. Build and run the backend in one tab
    1. `stack build`
    1. `stack exec scattergories`

1. Build and run the frontend in another tab
    1. `cd client`
    1. `scripts/compile_html.sh`
    1. `pub get`
    1. `webdev serve`

1. Go to `http://localhost:8080`

## Development

### Lint Haskell

1. `stack build stylish-haskell hlint`
1. `scripts/run-hlint.sh`
1. `scripts/run-stylish-haskell.sh`

### Add pre-commit git hooks

1. Install [`pre-commit`](https://pre-commit.com/)
1. `pre-commit install`
