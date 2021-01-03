/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-03 15:01:46
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-03 19:11:50
 */
import { cnAmount } from '../src/utils/cnAmount';
import should from 'should';

describe('数字变为中文符号', function () {
  it('输入少于1万的数字', function () {
      const res = cnAmount(10)
      should(res).be.equal('10')
  })
  it('输入少于1亿的数字', function () {
    const res = cnAmount(10000)
    should(res).be.equal('1.00万')
  })
  it('输入大于1亿的数字', function () {
    const res = cnAmount(1000000000)
    should(res).be.equal('10.00亿')
  })
  it('输入负数', function () {
    const res = cnAmount(-1524545)
    should(res).be.equal('-152.45万')
  })
  it('输入确定单位: 万', function () {
    const res = cnAmount(-1524545)
    should(res).be.equal('-152.45万')
  })
  it('输入确定单位: 亿', function () {
    const res = cnAmount(152454564)
    should(res).be.equal('1.52亿')
  })
})