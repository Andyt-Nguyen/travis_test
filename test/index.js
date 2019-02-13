const assert = require("chai").assert

describe("addition", () => {
    it("Should return 6", done => {
        assert.equal((1+4), 6)
        // test
        done()
    })

    it("Should return 50", done => {
        assert.equal((49+2), 6)
        // test
        done()
    })
})