// Author: Igor Dimitrijević (@igorskyflyer)

import { readFileSync } from 'node:fs'
import { assert, describe, test } from 'vitest'
import { stripHtml, stripHtmlCode } from '../src/index.mts'

const code: string = '<h3>igorskyflyer</h3>'

let htmlFile: Buffer
let strippedFile: Buffer
let partialFile: Buffer
let htmlString: string
let strippedString: string
let partialString: string
let hasFiles: boolean = false

try {
  htmlFile = readFileSync('./test/data/test.html')
  htmlString = htmlFile.toString()

  strippedFile = readFileSync('./test/data/stripped.txt')
  strippedString = strippedFile.toString()

  partialFile = readFileSync('./test/data/test-partial.html')
  partialString = partialFile.toString()

  hasFiles = true
} catch {
  // biome-ignore lint/nursery/noConsole: <explanation>
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

    test('#6 should return the stripped string ', () => {
      assert.equal(stripHtmlCode(htmlString), strippedString)
    })

    test('#7 should return "Lorem ipsum igorskyflyer"', () => {
      assert.equal(stripHtmlCode(partialString), 'Lorem ipsum igorskyflyer')
    })
  }
})
