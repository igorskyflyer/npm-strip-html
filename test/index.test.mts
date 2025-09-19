// Author: Igor Dimitrijević (@igorskyflyer)

import { readFileSync } from 'node:fs'
import { assert, describe, test } from 'vitest'
import { stripHtml, stripHtmlCode } from '../src/index.mts'

const code: string = '<hr><h3>igorskyflyer</h3><br>'

let htmlString: string
let strippedStringWhitespace: string
let strippedStringNoWhitespace: string
let partialString: string
let hasFiles: boolean = false

try {
  htmlString = readFileSync('./test/data/test.html', 'utf-8')
  strippedStringWhitespace = readFileSync(
    './test/data/stripped-whitespace.txt',
    'utf-8'
  )
  strippedStringNoWhitespace = readFileSync(
    './test/data/stripped-no-whitespace.txt',
    'utf-8'
  )
  partialString = readFileSync('./test/data/test-partial.html', 'utf-8')

  hasFiles = true
} catch {
  // biome-ignore lint/suspicious/noConsole: Needed for the tests
  console.warn(
    'The test files are not available, running only small sample tests.'
  )
}

describe('🧪 Strip <html> tests 🧪', () => {
  test('#1 should return 0 ', () => {
    assert.equal(stripHtml('').length, 0)
  })

  test('#2 should return 0 ', () => {
    assert.equal(stripHtmlCode('').length, 0)
  })

  test('#3 should return ""', () => {
    assert.equal(stripHtml(code), '')
  })

  test('#4 should return "igorskyflyer"', () => {
    assert.equal(stripHtmlCode(code), 'igorskyflyer')
  })

  if (hasFiles) {
    test('#5 should return "" ', () => {
      assert.equal(stripHtml(htmlString), '')
    })

    test('#6 should return the stripped string (whitespace)', () => {
      assert.equal(stripHtmlCode(htmlString), strippedStringWhitespace)
    })

    test('#7 should return the stripped string (no whitespace)', () => {
      assert.equal(
        stripHtmlCode(htmlString, { trimWhitespace: true }),
        strippedStringNoWhitespace
      )
    })

    test('#8 should return "Lorem ipsum igorskyflyer"', () => {
      assert.equal(stripHtmlCode(partialString), 'Lorem ipsum igorskyflyer')
    })
  }
})
