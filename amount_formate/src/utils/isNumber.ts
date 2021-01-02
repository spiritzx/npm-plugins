/*
 * @Descripttion: 检查是否是数据类型
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2021-01-02 21:46:45
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2021-01-02 22:28:48
 */
export function isNumber(num: number) {
  let res:boolean = true;
  if (typeof num !== 'number' || !Number.isFinite(num)) {
    res = false;
    throw new Error("params is error");
  }
  return res;
}