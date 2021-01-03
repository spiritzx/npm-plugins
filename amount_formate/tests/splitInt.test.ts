/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-03 11:21:35
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-03 15:08:33
 */
import { splitAmount } from '../src/utils/splitAmount';
import should from 'should';

describe(',分割整数', function () {
  // it('正常数字0', function () {
  //     const res = splitAmount(10)
  //     should(res).be.equal('10')
  // })
  // it('正常数字2', function () {
  //   const res = splitAmount(1000000)
  //   should(res).be.equal('1,000,000')
  // })
  // it('正常数字4', function () {
  //   const res = splitAmount(-100000000)
  //   should(res).be.equal('-100,000,000')
  // })
  // it('小数', function () {
  //   const res = splitAmount(100000000.254545)
  //   should(res).be.equal('100,000,000.254,545')
  // })
  // it('小数变为整数', function () {
  //   const res = splitAmount(100000000.254545, 0)
  //   should(res).be.equal('100,000,000')
  // })
  // it('小数保留两位', function () {
  //   const res = splitAmount(100000000.254545, 2)
  //   should(res).be.equal('100,000,000.25')
  // })
  // it('字符串', function () {
  //   const res = splitAmount("test" as unknown as number)
  //   should(res).be.equal(undefined)
  // })
  // it('超过安全值的数字', function () {
  //   const res = splitAmount(Infinity)
  //   should(res).be.equal(undefined)
  // })
})