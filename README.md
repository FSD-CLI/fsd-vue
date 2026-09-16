# FSD Vue Starter

Production-ready Vue 3 + Vite + TypeScript template powered by
[Feature-Sliced Design](https://feature-sliced.design/).

This repository is the Vue template used by
[`create-fsd-architecture`](https://www.npmjs.com/package/create-fsd-architecture).

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
