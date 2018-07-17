# @vmo-fed/react-tooltip

### 安装

```shell
npm i @vmo-fed/react-tooltip -S
```

### 使用

```jsx
import ReactTooltip from '@vmo-fed/react-tooltip';

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <div style={{position: 'absolute', left: '400px', top: '400px', padding: '20px', backgroundColor: 'red'}} tooltip="第一个组件 向上" tooltip-place="top">向上</div>
        <ReactTooltip></ReactTooltip>
      </div>
    );
  }
}
```

> **tooltip为要显示的内容**
>
> **tooltip-place为显示的位置：top、right、bottom、left**

### 自定义className

如果你希望改变tooltip默认的颜色、宽度等样式，可以给ReactTooltip组件添加自定义的className

```jsx
<ReactTooltip customClass="custom-tooltip"></ReactTooltip>
```

这样可以通过改变custom-tooltip的样式来改变tooltip

```css
.custom-tooltip {
    max-width: 100px;
    ...
}
```

如果不想添加任何自定义的className，可以结合ReactTooltip已有的className：vmo-fed-react-tooltip

```css
.vmo-fed-react-tooltip {
    max-width: 100px;
    ...
}
```

如果需要改变背景色，tooltip中的箭头也需要跟着修改，可以参照如下的在线demo

[在线demo](https://codesandbox.io/s/0p0vlrqo5p)

[在线文档](https://vmo-fed.github.io/react-tooltip/doc/#/react-tooltip/doc/react-tooltip)
