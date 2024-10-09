// 脑图经典11
export default {
    backgroundColor: '#ffffff',
    // 连线的颜色
    lineColor: '#333333',
    lineWidth: 2,
    // 概要连线的粗细
    generalizationLineWidth: 2,
    // 概要连线的颜色
    generalizationLineColor: '#2176ef',
    // 关联线默认状态的颜色
    associativeLineColor: '#2176ef',
    // 关联线文字颜色
    associativeLineTextColor: '#343433',
    // 关联线激活状态的颜色
    associativeLineActiveColor: '#343433',
    // 根节点样式
    root: {
      fillColor: '#2176ef',
      color: '#fff',
      borderColor: '',
      borderWidth: 0,
      fontSize: 24
    },
    // 二级节点样式
    second: {
      fillColor: '#fff9e4',
      color: '#4c4b46',
      borderColor: '#343433',
      borderWidth: 2,
      fontSize: 18
    },
    // 三级及以下节点样式
    node: {
      fontSize: 14,
      color: '#343433'
    },
    // 概要节点样式
    generalization: {
      fontSize: 14,
      fillColor: '#2176ef',
      borderColor: '',
      borderWidth: 0,
      color: '#fff'
    }
  }
  