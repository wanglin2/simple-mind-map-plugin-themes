// 脑图经典8
export default {
    backgroundColor: '#fff',
    // 连线的颜色
    lineColor: '#36aaa9',
    lineWidth: 2,
    // 概要连线的粗细
    generalizationLineWidth: 2,
    // 概要连线的颜色
    generalizationLineColor: '#36aaa9',
    // 关联线默认状态的颜色
    associativeLineColor: '#3e58ea',
    // 关联线文字颜色
    associativeLineTextColor: '#679fba',
    // 关联线激活状态的颜色
    associativeLineActiveColor: '#50a4b4',
    // 根节点样式
    root: {
      fillColor: '#3e58ea',
      color: '#fff',
      borderColor: '',
      borderWidth: 0,
      fontSize: 24
    },
    // 二级节点样式
    second: {
      fillColor: '#e3fbff',
      color: '#58aabc',
      borderColor: '#50a4b4',
      borderWidth: 2,
      fontSize: 18
    },
    // 三级及以下节点样式
    node: {
      fontSize: 14,
      color: '#50a4b4'
    },
    // 概要节点样式
    generalization: {
      fontSize: 14,
      fillColor: '#3e58ea',
      borderColor: '',
      borderWidth: 0,
      color: '#fff'
    }
  }
  