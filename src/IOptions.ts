// Author: Igor Dimitrijević (@igorskyflyer)

/**
 * Options for the HTML stripping
 */
export interface IOptions {
  /**
   * If true, trims and normalizes whitespace - internal runs of whitespace (spaces, tabs, newlines) collapse to a single space.
   * Leading/trailing whitespace is always trimmed.
   */
  trimWhitespace?: boolean
}
