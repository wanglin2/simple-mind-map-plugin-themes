// 脑图经典14
export default {
    backgroundColor: '#ffeed2',
    // 连线的颜色
    lineColor: '#976a43',
    lineWidth: 2,
    // 概要连线的粗细
    generalizationLineWidth: 2,
    // 概要连线的颜色
    generalizationLineColor: '#19807e',
    // 关联线默认状态的颜色
    associativeLineColor: '#19807e',
    // 关联线文字颜色
    associativeLineTextColor: '#764014',
    // 关联线激活状态的颜色
    associativeLineActiveColor: '#976a43',
    // 根节点样式
    root: {
      fillColor: '#19807e',
      color: '#f3f0b8',
      borderColor: '',
      borderWidth: 0,
      fontSize: 24,
      shape: 'circle'
    },
    // 二级节点样式
    second: {
      fillColor: '#eacdb3',
      color: '#7f4d1f',
      borderColor: '#764014',
      borderWidth: 2,
      fontSize: 18,
      shape: 'roundedRectangle'
    },
    // 三级及以下节点样式
    node: {
      fontSize: 14,
      color: '#764014'
    },
    // 概要节点样式
    generalization: {
      fontSize: 14,
      fillColor: '#19807e',
      borderColor: '',
      borderWidth: 0,
      color: '#f3f0b8'
    }
  }
  