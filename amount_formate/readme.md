
# 数额转化插件
## 将数字通过 , 分割

```
splitAmount(amount[, digits])
```
1. amount: 数额
2. digits: 小数保留几位

```
splitAmount(100000000.254545, 2)
// 100,000,000.25
```

## 将数字转化为中文格式

```
splitAmount(cnAmount[, unit])
```
1. amount: 数额
2. unit: 中文单位: 万,亿

```
const res = cnAmount(1000000000)
// 10.00亿
```