# commit convention

this repository follows the [conventional commits](https://conventionalcommits.org) specification. every commit must be atomic, readable, and pass automated linting rules.

---

## structure

```text
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

### rules
* **lowercase only:** write types, scopes, and subjects in all lowercase.
* **imperative mood:** write the subject as a command (`add`, `fix`, `remove`, not `added` or `fixes`).
* **character limits:** keep the subject line under 50 characters. wrap body lines at 72 characters (recommended).
* **no trailing period:** never end the subject line with a period.
* **explain why, not how:** use the optional body to document context, trade-offs, and motivation.

---

## types

| type | purpose | semver |
| :--- | :--- | :--- |
| `feat` | new user-facing feature or ui component | minor |
| `fix` | bug fix or broken behavior resolution | patch |
| `perf` | performance, speed, or bundle size optimization | patch |
| `refactor` | code restructuring without changing external behavior | none |
| `style` | formatting, whitespace, or linter fixes (no css/ui changes) | none |
| `test` | adding missing tests or fixing existing tests | none |
| `docs` | documentation or comment updates only | none |
| `build` | build system, bundler, or dependency changes (`package.json`) | none |
| `ci` | ci/cd pipeline or workflow configuration changes | none |
| `chore` | maintenance tasks, tooling, or `.gitignore` updates | none |
| `revert` | reverts a previous commit (reference commit hash in body) | varies |

---

## scopes (next.js / full-stack)

scopes are optional but recommended to pinpoint affected modules:

* `ui` — layout, styling, tailwind/css, components
* `app` — app router pages, layouts, middleware, server actions
* `api` — route handlers, external integrations, webhooks
* `auth` — authentication, sessions, permissions
* `db` — database schema, migrations, queries
* `hooks` — custom react hooks and client state
* `lib` — shared utilities, helpers, types
* `a11y` — accessibility improvements
* `seo` — metadata, sitemaps, opengraph tags
* `deps` — package upgrades or removals
* `config` — `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, env

---

## breaking changes

append `!` before the colon to indicate a breaking api or behavioral change, and describe the migration path in the footer:

```text
feat(api)!: require bearer token for user endpoints

BREAKING CHANGE: unauthenticated requests to /api/users now return 401.
```

---

## examples

```text
feat(ui): add responsive mobile navigation drawer
```

```text
fix(auth): prevent redirect loop on expired session token
```

```text
refactor(lib): extract date formatting helpers into shared module
```

```text
build(deps): upgrade next from 15.1 to 15.2
```

---

## workflow checklist

1. stage logical chunks only (`git add -p` or vs code stage selected ranges).
2. verify build and linter pass (`npm run lint`).
3. squash or reword local wip commits (`git rebase -i`) before pushing.
4. never rebase commits already pushed to `main`.
