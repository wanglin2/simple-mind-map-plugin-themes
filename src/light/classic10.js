// 脑图经典10
export default {
    backgroundColor: '#fffef6',
    // 连线的颜色
    lineColor: '#273d62',
    lineWidth: 2,
    // 概要连线的粗细
    generalizationLineWidth: 2,
    // 概要连线的颜色
    generalizationLineColor: '#273d62',
    // 关联线默认状态的颜色
    associativeLineColor: '#9edeee',
    // 关联线文字颜色
    associativeLineTextColor: '#395c85',
    // 关联线激活状态的颜色
    associativeLineActiveColor: '#273d62',
    // 根节点样式
    root: {
      fillColor: '#273d62',
      color: '#fff',
      borderColor: '',
      borderWidth: 0,
      fontSize: 24
    },
    // 二级节点样式
    second: {
      fillColor: '#9edeee',
      color: '#406080',
      borderColor: '#395c85',
      borderWidth: 2,
      fontSize: 18
    },
    // 三级及以下节点样式
    node: {
      fontSize: 14,
      color: '#395c85'
    },
    // 概要节点样式
    generalization: {
      fontSize: 14,
      fillColor: '#273d62',
      borderColor: '',
      borderWidth: 0,
      color: '#fff'
    }
  }
  