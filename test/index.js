const assert = require("chai").assert
//alsjdf;alj
describe("addition", () => {
    it("Should return 6", done => {
        assert.equal((1+4), 6)
        // test
        done()
    })

    it("Should return 50", done => {
        assert.equal((49+2), 6)
        // test goo goog gah gah
        done()
    })
    
    it("Should return 99", done => {
        assert.equal((2+2), 6)
        // test
        done()
    })
})
