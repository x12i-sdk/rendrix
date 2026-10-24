# @x12i/rendrix usage example

Inline variant template rendering with Handlebars and CEL where filters.

This consuming application demonstrates **render a template from application data** using the published npm package, pinned to `4.4.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Render a message template from application data.
- Use a documented condition filter when choosing content variants.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/rendrix)
- [Implementation monorepo](https://github.com/x12i/rendrix)
- [Reviewed package source](https://github.com/x12i/rendrix/tree/41535f6b9266ea6bf3ccc028e0b77b582069751c/.)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
