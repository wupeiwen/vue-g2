// 时间格式化
export let dateFormat = (dateTime, valueFormat) => {
  let newDate = new Date(dateTime)
  valueFormat = valueFormat || 'yyyy-MM-dd'
  let date = {
    'yy': newDate.getFullYear(),
    'MM': newDate.getMonth() + 1,
    'dd': newDate.getDate(),
    'hh': newDate.getHours(),
    'mm': newDate.getMinutes(),
    'ss': newDate.getSeconds(),
    'D': ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][newDate.getDay()]
  }
  // 输出年 y+:匹配1个到多个y,i:忽略大小写
  if (/(y+)/i.test(valueFormat)) {
    valueFormat = valueFormat.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  // 输出月、日、时、分、秒、星期
  Object.keys(date).forEach(function (i) {
    // 只有写成`(${i})`形式，才能在正则表达式中捕获子匹配，进而才能用到RegExp.$1的值
    if (new RegExp(`(${i})`).test(valueFormat)) {
      // 判断，如果时间为一位数，则在前面加'0'
      if (RegExp.$1.length === 2) {
        if (date[i] < 10) {
          date[i] = `0${date[i]}`
        }
      }
      // 替换初始化函数时候传入yyyy-mm-dd hh:mm:ss D
      valueFormat = valueFormat.replace(RegExp.$1, date[i])
    }
  })
  return valueFormat
}

// 处理百分比
export let percentFormat = (value) => {
  if (!value) return '0%'
  value = value * 100
  return String(value).indexOf('.') > 0 ? `${value.toFixed(1)}%` : `${parseInt(value)}%`
}

// 处理千位分隔
export let numFormat = (value) => {
  if (!value) return 0
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  if (String(value).indexOf('.') > 0) {
    const list = value.toFixed(1).split('.')
    list[0] = String(list[0]).replace(reg, '$&,')
    return list.join('.')
  } else {
    return String(value).replace(reg, '$&,')
  }
}

// 处理浮点数或整数(浮点数取一位/整数不做处理)  问题: floatIntFormat(0.58*100) 返回 58.0
export let floatIntFormat = (value) => {
  if (!value) return 0
  if (String(value).indexOf('.') > 0) {
    return value.toFixed(1)
  } else {
    return value
  }
}

// 颜色组
export const color = ['#1890FF', '#2FC25B', '#FACC14', '#223273', '#8543E0', '#13C2C2', '#3436C7', '#F04864']

// axis配置类
export class AxisOption {
  constructor (type, axisColor, showGrid) {
    let axisOption = { label: { textStyle: { fill: axisColor.labelColor } }, line: {} }
    if (type === 'x' || type === 'name') {
      axisOption['line']['stroke'] = axisColor.lineColor
      return axisOption
    } else {
      if (showGrid === false) {
        axisOption['grid'] = null
      }
      return axisOption
    }
  }
}
