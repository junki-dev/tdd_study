const utils = require("./utils");
const assert = require("assert");
const should = require("should");

describe("[1] utils.js 모듈의 capitalize() 함수는 ", () => {
  it("문자열의 첫번째 문자를 대문자로 변환한다.", () => {
    // 테스트 코드 작성
    const result = utils.capitalize("hello");

    assert.equal(result, "Hello");
  });
});

describe("[2] utils.js 모듈의 capitalize() 함수는 ", () => {
  it("문자열의 첫번째 문자를 대문자로 변환한다.", () => {
    // 테스트 코드 작성
    const result = utils.capitalize("hello");

    result.should.be.equal("Hello");
  });
});
