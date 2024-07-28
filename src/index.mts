// Author: Igor Dimitrijević (@igorskyflyer)

const rxHtmlCode: RegExp = /<[^>]+>([^<]+)?/gm
const rxHtml: RegExp = /<[^>]+>(?:[^<]+)?/gm

/**
 * Strips only the HTML code while keeping the text content.
 * @param {string} html The HTML string to process.
 * @returns {string} The processed string.
 */
export function stripHtmlCode(html: string): string {
  if (typeof html !== 'string' || html.length === 0) {
    return ''
  }

  return html.replace(rxHtmlCode, '$1').trim()
}

/**
 * Strips HTML tags completely.
 * @param {string} html The HTML string to process.
 * @returns {string} The processed string.
 */
export function stripHtml(html: string): string {
  if (typeof html !== 'string' || html.length === 0) {
    return ''
  }

  return html.replace(rxHtml, '').trim()
}
