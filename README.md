# strip-html

🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨

<br>

<div align="center">
<h3>💖 Support further development</h3>
<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="108"></a>
</div>

<br>
<br>
<br>

## 🕵🏼‍♂️ Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/strip-html"
```

<br>

## 🤹🏼‍♂️ API

<br>

```ts
function stripHtml(html: string): string
```

_Strips HTML tags completely._

`html: string` - the HTML string to process.

`returns` - the processed string.

<br>

```ts
function stripHtmlCode(html: string): string
```

_Strips only the HTML code while keeping the text content._

`html: string` - the HTML string to process.

`returns` - the processed string.
