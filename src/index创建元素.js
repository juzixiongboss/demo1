import React from 'react';//创建元素
import ReactDOM from 'react-dom'; //渲染元素到页面

//三个参数 1.标签 2.props属性 3.children

//命令式创建元素
const ele = React.createElement(

  "h1",
  { className:"test",style:{ color:"pink"} },
  "疫情消散"
  
  ) //虚拟DOM
 //cloneElment 和 createElment 的区别

 //cloneElment的两个参数 1.克隆的对象 2.所有属性的集合

const clone1 = React.cloneElement(

  ele,
  {children:"科比",style:{ color:"blue" }}

  )
//React创建元素的练习
  const ele2 = React.createElement("div",{ className:"list"},[

    React.createElement("h1",null,"水果"),

    React.createElement("ul",null,[

      React.createElement("li",null,"苹果"),
      React.createElement("li",null,"橘子"),

    ])

  ])


  const ele3 = <div></div> //JSX语法

  //等同于
  React.createElement("div")

  const ele4 = (

    <div className='list'>
      <h1>蔬菜</h1>
      <ul>
        <li>西瓜</li>
        <li>榴莲</li>
      </ul>
    </div>

  )
ReactDOM.render(ele4,document.getElementById('root'))
