# Astro Contentful

**Astro Contentful** lets you use **Contentful** in [Astro](https://astro.build).

[![NPM Version][npm-img]][npm-url]
[![Open in StackBlitz][stackblitz-img]][stackblitz-url]

```astro
---
import Entry from '@astropub/contentful:entries/t1h1x38!astro'
---
<h1>
  <Entry of="title" />
</h1>

<Entry of="content">
  <p>Fallback content.</p>
</Entry>
```

```astro
---
import EntryList from '@astropub/contentful:entries?content_type=blog!astro'
---
<EntryList>{
  Entry => (
    <h1>
      <Entry of="title" />
    </h1>

    <Entry of="content">
      <p>Fallback content.</p>
    </Entry>
  )
}</EntryList>
```

## Usage

Install **Astro Contentful** to your project.

```shell
npm install @astropub/contentful
```

Use **Astro Contentful** components in your project.

```astro
---
// data
import entry from '@astropub/contentful:entries/t1h1x38'
import entryList from '@astropub/contentful:entries'
import oneEntryList from '@astropub/contentful:entries?content_type=blog'

// components
import Entry from '@astropub/contentful:entries/t1h1x38!astro'
import EntryList from '@astropub/contentful:entries!astro'
import OneEntryList from '@astropub/contentful:entries?content_type=blog!astro'
---
```

Enjoy!

## Project Structure

Inside of this Astro project, you'll see the following folders and files:

```
/
├── demo/
│   ├── public/
│   └── src/
│       └── pages/
            ├── index.astro
│           └── ...etc
└── packages/
    └── contentful/
        ├── package.json
        └── ...etc
```

This project uses **workspaces** to develop a single package, `@astropub/contentful`.

It also includes a minimal Astro project, `demo`, for developing and demonstrating the component.

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                       |
|:----------------|:---------------------------------------------|
| `npm install`   | Installs dependencies                        |
| `npm run start` | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./dist/`      |
| `npm run serve` | Preview your build locally, before deploying |

Want to learn more?
Read the [Astro documentation][docs-url] or jump into the [Astro Discord][chat-url].

[chat-url]: https://astro.build/chat
[docs-url]: https://github.com/withastro/astro

[npm-img]: https://img.shields.io/npm/v/@astropub/contentful?color=%23444&label=&labelColor=%23CB0000&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjE1MCAxNTAgNDAwIDQwMCIgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTE1MCA1NTBoMjAwVjI1MGgxMDB2MzAwaDEwMFYxNTBIMTUweiIvPjwvc3ZnPg==&style=for-the-badge
[npm-url]: https://www.npmjs.com/package/@astropub/contentful
[stackblitz-img]: https://img.shields.io/badge/-Open%20in%20Stackblitz-%231374EF?color=%23444&labelColor=%231374EF&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjEwIDggMTIgMTgiIGhlaWdodD0iMTgiIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik0xMCAxNy42aDUuMmwtMyA3LjRMMjIgMTQuNGgtNS4ybDMtNy40TDEwIDE3LjZaIi8+PC9zdmc+&style=for-the-badge
[stackblitz-url]: https://stackblitz.com/github/astro-community/contentful
