# @alexlafroscia/eslint-config

After setting up almost the same ESLint configuration on many project, I decided to finally come up with a personal configuration that I can share and extend.

My personal configuration tries to be light on language usage rules and mostly just focus on formatting. To that end, it leverages [`prettier`][prettier] for the most part, with a few extra things added in.

## Usage

First, install the config file

```bash
yarn add -D @alexlafroscia/eslint-config
```

If you just want to extend from the base configuration, the only thing you need in your `.eslintrc` file is

```json
{
  "extends": "@alexlafroscia"
}
```

If you're using TypeScript, you should instead do the following to configure the TypeScript parser instead.

```json
{
  "extends": "@alexlafroscia/eslint-config/typescript"
}
```

## What does this configuration do?

All versions of the configuration

- Configures Prettier to run through ESLint (and disable any built-in ESLint rules about formatting)
- Configures the sorting and grouping of imports

The `typescript` configuration additionally

- Configures the correct parser
- Disable ESLint from warning about unused variables (since TypeScript will take care for that more accurately)

[prettier]: https://prettier.io
