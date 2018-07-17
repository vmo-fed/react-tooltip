import React from "react";
import ReactDOM from "react-dom";
import ReactTooltip  from './ReactTooltip';

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <div style={{position: 'absolute', left: '400px', top: '400px', padding: '20px', backgroundColor: 'red'}} tooltip="第一个组件 向上" tooltip-place="top">向上</div>
        <div style={{position: 'absolute', left: '300px', top: '300px', padding: '20px', backgroundColor: 'red'}} tooltip="第二个组件 向右" tooltip-place="right">向右</div>
        <div style={{position: 'absolute', left: '200px', top: '200px', padding: '20px', backgroundColor: 'red'}} tooltip="第三个组件 向下" tooltip-place="bottom">向下</div>
        <div style={{position: 'absolute', left: '100px', top: '100px', padding: '20px', backgroundColor: 'red'}} tooltip="第四个组件 向左" tooltip-place="left">向左</div>
        <div style={{position: 'absolute', left: '500px', top: '500px', padding: '20px', backgroundColor: 'red'}} tooltip="第四个组件 向左" tooltip-place="left">
          <div>123</div>
          <div>456</div>
        </div>
        <ReactTooltip customClass="custom-tooltip"></ReactTooltip>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);
