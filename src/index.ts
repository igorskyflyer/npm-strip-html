// @igorskyflyer

export function stripHtmlCode(html: string): string {
  return html.length === 0 ? '' : html.replace(/<[^>]+>([^<]+)?/gm, '$1').trim()
}

export function stripHtml(html: string): string {
  return html.length === 0 ? '' : html.replace(/<[^>]+>(?:[^<]+)?/gm, '').trim()
}
