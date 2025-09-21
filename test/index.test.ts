// Author: Igor Dimitrijević (@igorskyflyer)

import { readFileSync } from 'node:fs'
import { assert, describe, test } from 'vitest'
import { stripHtml, stripHtmlCode } from '../src/index.js'

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

  test('#9 should return "Hello world"', () => {
    assert.equal(stripHtml('Hello world'), 'Hello world')
  })

  test('#10 should leave "<<notatag>>" untouched', () => {
    assert.equal(stripHtml('<<notatag>>'), '<>')
  })

  test('#11 should strip comment if supported', () => {
    assert.equal(stripHtml('<!-- comment -->'), '')
  })

  test('#12 should strip declaration if supported', () => {
    assert.equal(stripHtml('<!ENTITY foo>'), '')
  })

  test('#13 should strip deeply nested tags', () => {
    assert.equal(stripHtml('<div><span><b>text</b></span></div>'), '')
  })

  test('#14 should preserve inner text from nested tags', () => {
    assert.equal(stripHtmlCode('<div><span><b>text</b></span></div>'), 'text')
  })

  test('#15 should strip broken closing tag', () => {
    assert.equal(stripHtml('<div><span>text</div>'), '')
  })

  test('#16 should strip repeated self-closing tags', () => {
    assert.equal(stripHtml('<br><br><br>'), '')
  })

  test('#17 should preserve inner text from broken tag', () => {
    assert.equal(stripHtmlCode('<div>text'), 'text')
  })

  test('#18 should collapse whitespace', () => {
    assert.equal(
      stripHtmlCode('  foo\tbar\nbaz  ', { trimWhitespace: true }),
      'foo bar baz'
    )
  })

  test('#19 should preserve &nbsp; unless decoded', () => {
    assert.equal(stripHtmlCode('foo&nbsp;bar'), 'foo&nbsp;bar')
  })

  test('#20 should preserve emoji outside tags', () => {
    assert.equal(stripHtml('👾<b>alien</b>👾'), '👾👾')
  })

  test('#21 should preserve emoji and inner text', () => {
    assert.equal(stripHtmlCode('👾<b>alien</b>👾'), '👾alien👾')
  })

  test('#22 should preserve CJK characters and inner text', () => {
    assert.equal(stripHtmlCode('你好 <span>世界</span>'), '你好 世界')
  })

  test('#23 should handle large plain string', () => {
    const big: string = 'x'.repeat(100000)
    assert.equal(stripHtml(big), big)
  })

  test('#24 should handle large HTML string', () => {
    const bigHtml: string = `${'<div>'.repeat(1000)}text${'</div>'.repeat(1000)}`
    assert.equal(stripHtml(bigHtml), '')
  })
})
