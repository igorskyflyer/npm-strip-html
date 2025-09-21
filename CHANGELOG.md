# 📒 Changelog

### of [@igorskyflyer/strip-html](https://github.com/igorskyflyer/npm-strip-html)

<br>

## v2.1.0 (*21-Sep-2025*)

- **✨ feat**: make `stripHtml()` also strip:
  - `<! … >` declarations
  - `<!-- … -->` comments
  - paired tags with content
  - lone closing tags (`</div>`)
  - self-closing tags (`<br>`)
- **✨ feat**: add `trim-whitespace` option to the HTML stripping functions

<br>

- **✅ fix**: fix the RegExp for HTML stripping
- **✅ fix**: fix the RegExp for text extraction

<br>

- **💻 dev**: add an interface `IOptions` for options
- **💻 dev**: upgrade Node to >= `v22`
- **💻 dev**: upgrade dependencies

<br>
<br>

## v2.0.0 (*28-Jul-2024*)

- **❌ BREAKING**: migrate to ESM-only
- **💻 dev**: upgrade Node to `v20`
