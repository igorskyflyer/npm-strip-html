import { assert as chai } from 'chai'

import { stripHtml, stripHtmlCode } from '../src/index'
import { readFileSync } from 'fs'

const code: string = '<h3>igorskyflyer</h3>'
const testCount: number = 6

let file: Buffer
let html: string
let hasFile: boolean = false
let testRun: number = 0

try {
  file = readFileSync('./test/data/test.html')
  html = file.toString()
  hasFile = true
} catch {
  console.warn('The test file is not available, running only small sample tests.')
}

describe('🧪 strip-html tests 🧪', () => {
  it('#1 should return 0 ', () => {
    chai.equal(stripHtml('').length, 0)
    testRun++
  })

  it('#2 should return 0 ', () => {
    chai.equal(stripHtmlCode('').length, 0)
    testRun++
  })

  it('#3 should return "" ', () => {
    chai.equal(stripHtml(code), '')
    testRun++
  })

  it('#4 should return "igorskyflyer"', () => {
    chai.equal(stripHtmlCode(code), 'igorskyflyer')
    testRun++
  })

  if (hasFile) {
    it('#5 should return "" ', () => {
      chai.equal(stripHtml(html), '')
      testRun++
    })

    it('#6 should return 0 ', () => {
      chai.equal(stripHtmlCode(code), 'igorskyflyer')
      testRun++
    })
  }
}).afterAll(() => {
  console.log(`\nTests run: ${testRun}/${testCount}`)
})
