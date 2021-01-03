/*
 * @Descripttion: 通过,分割资金数
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-02 21:44:46
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-03 14:14:49
 */
import { isNumber } from './isNumber';

// ,分割整数
function splitIntAmount(amount: number): string {
  let res = '';
  const isMinus = amount < 0 ? true : false; 
  const reg1 = /[0-9]{0,3}/g
  const reg2 = /^,/;
  const num = Math.abs(parseInt(`${amount}`));
  const numStr = `${num}`.split('').reverse().join('');
  res = numStr.replace(reg1, function(...arg) {
    let txt = '';
    if (arg[0].length === 3) {
      txt = arg[0] + ',';
    } else {
      txt = arg[0];
    }
    return txt;
  }).split('').reverse().join('');
  res = res.replace(reg2, '');
  return isMinus ? `-${res}` : res;
}
// ,分割小数
function spliDoubleAmount(amount: number): string {
  let res = '';
  let numArr = `${amount}`.split(".");
  const res1 = splitIntAmount(Number(numArr[0]));
  const res2 = numArr[1] ? splitIntAmount(Number(numArr[1])) : numArr[1];
  res = res2 ? `${res1}.${res2}` : res1;
  return res;
}
// 通过 , 分割数
export function splitAmount(amount: number, digits = -1): string {
  isNumber(amount);
  let res = '';
  let num:number = 0;
  if (digits === -1) {
    res = spliDoubleAmount(amount);
  } else if (digits === 0) {
    num = parseInt(`${amount}`);
    res = splitIntAmount(num);
  } else {
    num = Number(amount.toFixed(digits));
    res = spliDoubleAmount(num);
  }
  return res;
}