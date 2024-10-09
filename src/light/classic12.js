// 脑图经典12
export default {
    backgroundColor: '#ffffff',
    // 连线的颜色
    lineColor: '#35b398',
    lineWidth: 2,
    // 概要连线的粗细
    generalizationLineWidth: 2,
    // 概要连线的颜色
    generalizationLineColor: '#21c384',
    // 关联线默认状态的颜色
    associativeLineColor: '#21c384',
    // 关联线文字颜色
    associativeLineTextColor: '#4d754b',
    // 关联线激活状态的颜色
    associativeLineActiveColor: '#f5ffe6',
    // 根节点样式
    root: {
      fillColor: '#21c384',
      color: '#fff',
      borderColor: '',
      borderWidth: 0,
      fontSize: 24
    },
    // 二级节点样式
    second: {
      fillColor: '#f5ffe6',
      color: '#386437',
      borderColor: '#35b398',
      borderWidth: 2,
      fontSize: 18
    },
    // 三级及以下节点样式
    node: {
      fontSize: 14,
      color: '#326032'
    },
    // 概要节点样式
    generalization: {
      fontSize: 14,
      fillColor: '#21c384',
      borderColor: '',
      borderWidth: 0,
      color: '#fff'
    }
  }
  