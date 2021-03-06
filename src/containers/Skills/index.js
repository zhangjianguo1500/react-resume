import React, {Component} from 'react'

import './index.css'

class Skills extends Component {
  getItems(data){
    //
    return data.map( message => {
      let { id,styleName,title,desc } =message;
      //return返回出去
      return (
        <div className="item" key={id}>
          <div className="item-icon">
            <i className={`iconfont icon-${styleName}`}></i>
          </div>
          <div className="item-info">
            <p className="info-title">{title}</p>
            <p className="info-desc">{desc}</p>
          </div>
        </div>
      )
    })
  }
  render (){
    //定义数据
    const data = [
      {id:0,styleName:"javascript",title:"Javascript",desc:"熟练掌握Javascript，掌握JS新标准ES6、ES7的语法"},
      {id:1,styleName:"react",title:"React.js",desc:"熟练掌握React.js，掌握React Router Redux等react技术内容。"}  
    ]
    return (
      <div className="skills">
        <h1 className="skills-title">工作技能</h1>
        <div className="skills-content">
           {this.getItems(data)}
        </div>
      </div>
    )
  }
}

export default Skills
