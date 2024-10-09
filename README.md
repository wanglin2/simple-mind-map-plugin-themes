# simple-mind-map-plugin-themes

[mind-map](https://github.com/wanglin2/mind-map)主题扩展插件，为`simple-mind-map`提供可用的主题。

# 安装

```bash
npm i simple-mind-map-plugin-themes
```

# 使用

```js
import MindMap from 'simple-mind-map'
import Themes from 'simple-mind-map-plugin-themes'

// 注册主题
Themes.init(MindMap)

// 实例化
new MindMap({
    theme: 'dark7'
})
```

## 属性

`Themes`对象暴露了两个属性：

- `darkList`：暗色主题列表

- `lightList`：亮色主题列表

## 方法

`Themes`对象暴露了两个方法：

- `init(MindMap)`

注册主题，需要在实例化思维导图前调用。参数为`simple-mind-map`构造函数。

- `remove(MindMap)`

删除注册的主题。参数为`simple-mind-map`构造函数。

## 其他

如果你需要获取所有主题列表可以通过如下方式：

```js
import themeList from 'simple-mind-map-plugin-themes/themeList'
```

`themeList`数据结构如下所示：

```js
[
    {
        name: '暗色',// 主题名称
        value: 'dark',// 主题标识，实例化或动态设置主题时都是通过该值
        theme: {},// 主题具体的配置
        dark: true// 是否是暗色主题
    }
]
```

需要注意的这个包里不包括`simple-mind-map`自带的默认主题，所以你要渲染包括默认主题在内的所有主题列表时需要自己加上默认主题，比如：

```js
[
    {
        name: '默认主题',
        value: 'default',
        dark: false
    },
    ...themeList
]
```

包里提供了每个主题的预览图片，要获取主题到图片的映射数据可以通过如下方式：

```js
import themeImgMap from 'simple-mind-map-plugin-themes/themeImgMap'
```

如果要获取打包后的文件，可以在`/node_modules/simple-mind-map-plugin-themes/dist/`目录下获取，提供了两种打包格式的文件：

```
themes.cjs.min.js
themes.esm.min.js
```

# 贡献主题

所有主题都是基于[默认主题](https://github.com/wanglin2/mind-map/blob/main/simple-mind-map/src/themes/default.js)扩展的，注册时会和默认主题进行合并。

主题整体分为暗色和亮色，分别在`/src/dark/`和`/src/light/`目录下定义，文件定义完成后需要在各自目录的`index.js`文件中导出。

推荐附带一张预览图，可以在`/src/imgs/`找到现有主题的预览图片，如果添加了图片可以在`themeImgMap.js`文件中导出。

# 主题列表

所有可用主题可以从[暗色主题列表](./src/dark/index.js)和[亮色主题列表](./src/light/index.js)两个文件中查看。