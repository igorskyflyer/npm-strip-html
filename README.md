<h1 align="center">Strip &lt;html&gt;</h1>

<br>

<div align="center">
  🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨
</div>

<br>
<br>

<div align="center">
  <blockquote>
    <br>
    <h4>💖 Support further development</h4>
    <span>I work hard for every project, including this one
    <br>
    and your support means a lot to me!
    <br>
    <br>
    Consider buying me a coffee. ☕
    <br>
    <strong>Thank you for supporting my efforts! 🙏😊</strong></span>
    <br>
    <br>
    <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
    <br>
    <br>
    <a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
    <br>
    <br>
    <br>
  </blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Usage](#-usage)
- [API](#-api)
  - [stripHtmlCode](#striphtmlcodehtml-string-string)
  - [stripHtml](#striphtmlhtml-string-string)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i '@igor.dvlpr/strip-html'
```

<br>

## 🤹🏼 API


### `stripHtml(html: string): string`

*Strips HTML tags completely.*  

`html` - The HTML string to process.  

Returns the processed string.

---

### `stripHtmlCode(html: string): string`

*Strips only the HTML code while keeping the text content.*  

`html` - The HTML string to process.  

Returns the processed string.

---

## ✨ Examples

`example.ts`
```ts
import { stripHtmlCode } from '@igor.dvlpr/strip-html'

console.log(
  stripHtmlCode(`<div class="container">
    <h1>Title</h1>
    <p>This is a <strong>paragraph</strong> with some <em>emphasis</em> and a <a href="#">link</a>.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</div>`)
)

// Will print

/*
Title
    This is a paragraph with some emphasis and a link.

        Item 1
        Item 2
        Item 3
*/
```

---

## 📝 Changelog

📑 The changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-strip-html/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-strip-html/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/duoscribi](https://www.npmjs.com/package/@igor.dvlpr/duoscribi)

> _✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓_

<br>

[@igor.dvlpr/magic-queryselector](https://www.npmjs.com/package/@igor.dvlpr/magic-queryselector)

> _🪄 A TypeScript-types patch for querySelector/querySelectorAll, make them return types you expect them to! 🔮_

<br>

[@igor.dvlpr/astro-escaped-component](https://www.npmjs.com/package/@igor.dvlpr/astro-escaped-component)

> _🏃🏻‍♂️‍➡️ An Astro component that holds only HTML-encoded content. 📜_

<br>

[@igor.dvlpr/str-is-in](https://www.npmjs.com/package/@igor.dvlpr/str-is-in)

> _🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍_

<br>

[@igor.dvlpr/strip-html-headings](https://www.npmjs.com/package/@igor.dvlpr/strip-html-headings)

> _🍛 Strips HTML headings! 🍤_

---

<br>

### 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
