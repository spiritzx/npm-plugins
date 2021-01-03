/*
 * @Descripttion: 通过中国单位来换算值
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-03 14:16:08
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-03 15:31:13
 */

import { isNumber } from "./isNumber";

function amountUnitByWan(amount: number): string {
  let res = '';
  res = (amount / 10000).toFixed(2) + '万'
  return res;
}
function amountUnitByYi(amount: number): string {
  let res = '';
  res = (amount / 100000000).toFixed(2) + '亿'
  return res;
}

export function cnAmount(
  amount: number,
  unit: string | undefined = undefined
): string {
  isNumber(amount);
  let res:string = '';
  let isMinus:boolean = amount < 0 ? true : false;
  let num = Math.abs(amount);
  if (!unit) {
    if (num >= 10000 && num < 100000000) {
      res = amountUnitByWan(num);
    } else if (num >= 100000000) {
      res = amountUnitByYi(num);
    } else {
      res = `${num}`;
    }
  } else {
    switch (unit) {
      case '万':
        res = amountUnitByWan(num);
        break;
      case '亿':
        res = amountUnitByYi(num);
        break;
      default:
        res = amountUnitByWan(num)
        break;
    }
  }
  return isMinus ? `-${res}` : res;
}