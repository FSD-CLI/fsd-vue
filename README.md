# FSD Vue Starter

Vue 3 + Vite + TypeScript template powered by
[Feature-Sliced Design](https://feature-sliced.design/).

This repository is the Vue template used by
[`create-fsd-architecture`](https://www.npmjs.com/package/create-fsd-architecture).

## Validation scope

This is a starter template. Repository quality checks cover the checked-in
example; production deployment requires validating your application, runtime,
API integration, authentication, and hosting configuration. CLI support and
release verification are documented at [fsdcli.me](https://fsdcli.me).

## Create a project

```bash
npx create-fsd-architecture@latest my-app --framework vue-vite
```

## Stack

- Vue 3 and Vite
- TypeScript
- Pinia
- TanStack Vue Query
- Axios
- VeeValidate 4 and Zod 3 (the current stable compatible pair)
- Tailwind CSS
- Steiger architecture checks
- ESLint, Husky, and Commitlint

## Architecture

```text
src/
├── app/
├── pages/
├── widgets/
├── features/
├── entities/
└── shared/
```

The dependency direction is `app → pages → widgets → features → entities → shared`.
Slices expose their public API through `index.ts` files.

## Development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run fsd:check
npm run lint
npm run build
npm run ci
```

## Generate slices

Inside a generated project:

```bash
npx create-fsd-architecture --generate feature auth
npx create-fsd-architecture --generate entity product
npx create-fsd-architecture --generate widget navigation
npx create-fsd-architecture --generate page checkout
```

The CLI reads `fsd.config.json`, so generated files use Vue-native libraries
without asking for the stack again.

## License

MIT

## Support FSD CLI

If this project helps you, you can optionally support its development:

- [GitHub Sponsors](https://github.com/sponsors/ashrafmo-1?frequency=one-time&sponsor=ashrafmo-1)
- [Buy Me a Coffee](https://buymeacoffee.com/ashrafqopiah)
- **InstaPay (Egypt):** `ashrafmo-1`

For InstaPay, use the username exactly as shown and verify the recipient details
in the app before confirming a transfer. Donations are optional.

## Git workflow policy

Git and Conventional Commits remain part of setup. Pre-commit checks staged and
working-tree whitespace; full builds run in CI. Set `FSD_PRE_COMMIT_LINT=1` to
run lint on commit or `FSD_PRE_PUSH_CHECKS=1` to run lint/build on push.
For an intentional emergency bypass, Husky supports `HUSKY=0 git commit ...`;
CI remains the required quality gate and failures must still be resolved.

Auto-PR and PR labeling are optional. The React template keeps reviewed examples
in `.github/optional-workflows/`; copy a chosen file into `.github/workflows/`
to enable it. Auto-PR is manual (`workflow_dispatch`) and needs repository
permission to create PRs. Labeler needs `.github/labeler.yml`, the labels
`documentation`, `source`, `ci`, and Actions permission to apply labels.
Do not enable automation before configuring its permissions and labels.
