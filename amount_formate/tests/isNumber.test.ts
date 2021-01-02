/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-02 22:39:28
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-02 23:17:16
 */
let { isNumber } = require('../src/js/main');
import should from 'should';

describe('数字检查', function () {
  it('正常数字', function () {
      const res = isNumber(10)
      should(res).be.equal(true)
  })
  it('字符串', function () {
    const res = isNumber("test")
    should(res).be.equal(undefined)
  })
  it('超过安全值的数字', function () {
    const res = isNumber(Infinity)
    should(res).be.equal(undefined)
  })
})
