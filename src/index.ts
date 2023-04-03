// @igorskyflyer

/**
 * Strips HTML tags completely.
 * @param html the HTML string to process
 * @returns the processed string
 */
export function stripHtmlCode(html: string): string {
  return html.length === 0 ? '' : html.replace(/<[^>]+>([^<]+)?/gm, '$1').trim()
}

/**
 * Strips only the HTML code while keeping the text content.
 *  @param html the HTML string to process
 * @returns the processed string
 */
export function stripHtml(html: string): string {
  return html.length === 0 ? '' : html.replace(/<[^>]+>(?:[^<]+)?/gm, '').trim()
}
