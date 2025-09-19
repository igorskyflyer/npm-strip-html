// Author: Igor Dimitrijević (@igorskyflyer)

import type { IOptions } from './IOptions.js'

const rxHtmlCode: RegExp = /<[^>]+>|([^<]+)/gm
const rxHtml: RegExp = /<[^>]+>|[^<]+/gm
const rxWhitespace: RegExp = /\s+/gm

/**
 * Strips only the HTML code while keeping the text content.
 * @param {string} html The HTML string to process.
 * @returns {string} The processed string.
 */
export function stripHtmlCode(html: string, args?: IOptions): string {
  return strip(html, args, true)
}

/**
 * Strips HTML tags completely.
 * @param {string} html The HTML string to process.
 * @returns {string} The processed string.
 */
export function stripHtml(html: string, args?: IOptions): string {
  return strip(html, args, false)
}

function strip(html: string, args?: IOptions, codeOnly?: boolean): string {
  if (typeof html !== 'string' || html.length === 0) {
    return ''
  }

  const options: IOptions = createOptions(args)
  let result: string

  if (codeOnly === true) {
    result = html.replace(rxHtmlCode, '$1')
  } else {
    result = html.replace(rxHtml, '')
  }

  if (options.trimWhitespace) {
    result = result.replace(rxWhitespace, ' ')
  }

  return result.trim()
}

function createOptions(options?: IOptions): IOptions {
  return {
    trimWhitespace: options?.trimWhitespace ?? false
  }
}
