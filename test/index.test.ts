import { assert as chai } from 'chai'
import { readFileSync } from 'fs'
import { stripHtml, stripHtmlCode } from '../src/index'

const code: string = '<h3>igorskyflyer</h3>'
const testCount: number = 6

let htmlFile: Buffer
let strippedFile: Buffer
let htmlString: string
let strippedString: string
let hasFile: boolean = false
let testRun: number = 0

try {
  htmlFile = readFileSync('./test/data/test.html')
  htmlString = htmlFile.toString()

  strippedFile = readFileSync('./test/data/stripped.txt')
  strippedString = strippedFile.toString()

  hasFile = true
} catch {
  console.warn('The test files are not available, running only small sample tests.')
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
      chai.equal(stripHtml(htmlString), '')
      testRun++
    })

    it('#6 should return 0 ', () => {
      chai.equal(stripHtmlCode(htmlString), strippedString)
      testRun++
    })
  }
}).afterAll(() => {
  console.log(`\nTests run: ${testRun}/${testCount}`)
})
