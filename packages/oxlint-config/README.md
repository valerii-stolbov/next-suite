# `@next-suite/oxlint-config`

Shared Oxlint rules for this monorepo. The private package exports:

- `@next-suite/oxlint-config/base` — correctness checks and common TypeScript, Unicorn, and Oxc rules.
- `@next-suite/oxlint-config/react` — the base rules plus React, import, and accessibility checks.
- `@next-suite/oxlint-config/next` — the base rules plus React, Next.js, import, and accessibility checks.

Both `apps/web` and `apps/cms` use the Next.js configuration in `oxlint.config.ts`:

```ts
import { defineConfig } from 'oxlint';

import nextConfig from '@next-suite/oxlint-config/next';

const config = defineConfig({
  extends: [nextConfig],
  ignorePatterns: ['next-env.d.ts'],
});

export default config;
```

The consuming workspace provides Oxlint 1 through the package's peer dependency. Run lint for the complete workspace from the repository root with:

```bash
pnpm lint
```

Use `pnpm lint:web` or `pnpm lint:cms` to check a single application.

This package contains configuration only. Application lint dependencies and source code remain in their consuming workspaces.
