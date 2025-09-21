<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-strip-html/main/media/strip-html.png" alt="Icon of Strip HTML" width="256" height="256">
  <h1>Strip HTML</h1>
</div>

<blockquote align="center">Strip HTML cleanly • Normalize messy whitespace • Fast replacement • Return plain text •</blockquote>

<h4 align="center">
  🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨
</h4>

<br>

## 📃 Table of Contents

- [**Features**](#-features)
- [**Usage**](#-usage)
- [**API**](#-api)
- [**Examples**](#️-examples)
- [**Changelog**](#-changelog)
- [**Support**](#-support)
- [**License**](#-license)
- [**Related**](#-related)
- [**Author**](#-author)

<br>

## 🤖 Features

- ✅ Strips HTML tags cleanly  
- 🧹 Trims leading and trailing whitespace  
- 📏 Collapses multiple spaces, tabs, newlines into one  
- ⚙️ Provides safe defaults for predictable output

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/strip-html
```

```bash
yarn add @igorskyflyer/strip-html
```

```bash
npm i @igorskyflyer/strip-html
```

<br>
<br>

## 🤹🏼 API

### `stripHtml(html: string, args?: IOptions): string`

*Strips HTML tags completely.*  

`html: string` - The HTML string to process.  

`args: IOptions` - The options to pass.  

An object with the following properties:

```ts
interface IOptions {
  trimWhitespace?: boolean
}
```  

`trimWhitespace?: boolean` - If true, trims and normalizes whitespace - internal runs of whitespace (spaces, tabs, newlines) collapse to a single space. Leading/trailing whitespace is always trimmed.  

Returns the processed string.

---

### `stripHtmlCode(html: string, args?: IOptions): string`

*Strips only the HTML code while keeping the text content.*  

`html: string` - The HTML string to process.  

`args: IOptions` - The options to pass.  

An object with the following properties:

```ts
interface IOptions {
  trimWhitespace?: boolean
}
```  

`trimWhitespace?: boolean` - If true, trims and normalizes whitespace - internal runs of whitespace (spaces, tabs, newlines) collapse to a single space. Leading/trailing whitespace is always trimmed.  

Returns the processed string.

<br>
<br>

## 🗒️ Examples

`example.ts`
```ts
import { stripHtmlCode, stripHtml } from '@igorskyflyer/strip-html'

console.log(
  stripHtmlCode(`<div class="container">
    <h1>Title</h1>
    <p>This is a <strong>paragraph</strong> with some <em>emphasis</em> and a <a href="#">link</a>.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</div>`))

/*
will print

Title
    This is a paragraph with some emphasis and a link.

        Item 1
        Item 2
        Item 3
*/

console.log(
  stripHtml(`<div class="container">
    <h1>Title</h1>
    <p>This is a <strong>paragraph</strong> with some <em>emphasis</em> and a <a href="#">link</a>.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</div>`)) // will print an empty string, i.e. ''

console.log(stripHtml(`Hello world`)) // will print 'Hello world'

console.log(
  stripHtmlCode(`<div class="container">
    <h1>Title</h1>
    <p>This is a <strong>paragraph</strong> with some <em>emphasis</em> and a <a href="#">link</a>.</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
</div>`, { trimWhitespace: true })) // will print 'Title This is a paragraph with some emphasis and a link. Item 1 Item 2 Item 3'
```

<br>
<br>

## 📝 Changelog

📑 Read about the latest changes in the [**CHANGELOG**](https://github.com/igorskyflyer/npm-strip-html/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the [**MIT license**](https://github.com/igorskyflyer/npm-strip-html/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[**@igorskyflyer/duoscribi**](https://www.npmjs.com/package/@igorskyflyer/duoscribi)

> _✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓_

<br>

[**@igorskyflyer/magic-queryselector**](https://www.npmjs.com/package/@igorskyflyer/magic-queryselector)

> _🪄 A TypeScript-types patch for querySelector/querySelectorAll, make them return types you expect them to! 🔮_

<br>

[**@igorskyflyer/astro-escaped-component**](https://www.npmjs.com/package/@igorskyflyer/astro-escaped-component)

> _🏃🏻‍♂️‍➡️ An Astro component that holds only HTML-encoded content. 📜_

<br>

[**@igorskyflyer/str-is-in**](https://www.npmjs.com/package/@igorskyflyer/str-is-in)

> _🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍_

<br>

[**@igorskyflyer/strip-html-headings**](https://www.npmjs.com/package/@igorskyflyer/strip-html-headings)

> _🍛 Strips HTML headings! 🍤_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević ([*@igorskyflyer*](https://github.com/igorskyflyer/))**.
