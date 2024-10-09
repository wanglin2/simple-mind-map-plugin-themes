// 脑图经典13
export default {
  backgroundColor: '#ffffff',
  // 连线的颜色
  lineColor: '#333333',
  lineWidth: 2,
  // 概要连线的粗细
  generalizationLineWidth: 2,
  // 概要连线的颜色
  generalizationLineColor: '#ffd613',
  // 关联线默认状态的颜色
  associativeLineColor: '#ffd613',
  // 关联线文字颜色
  associativeLineTextColor: '#2d2b23',
  // 关联线激活状态的颜色
  associativeLineActiveColor: '#d1ebf8',
  // 根节点样式
  root: {
    fillColor: '#ffd613',
    color: '#2d2b23',
    borderColor: '#1f2021',
    borderWidth: 2,
    fontSize: 24
  },
  // 二级节点样式
  second: {
    fillColor: '#d1ebf8',
    color: '#717b80',
    borderColor: '#333333',
    borderWidth: 2,
    fontSize: 18,
    borderRadius: 5
  },
  // 三级及以下节点样式
  node: {
    fontSize: 14,
    color: '#333333'
  },
  // 概要节点样式
  generalization: {
    fontSize: 14,
    fillColor: '#ffd613',
    borderColor: '',
    borderWidth: 0,
    color: '#2d2b23'
  }
}
