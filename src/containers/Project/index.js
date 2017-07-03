import React, {Component} from 'react'
import {Timeline} from 'antd'

import './index.css'
import TimelineItem from './TimelineItem'
import { fetchRepos } from '../../api/fetchGithub'

class Project extends Component {
  //定义初始数据,设置它的初始为一个空的数组repos: []
  constructor(props){
    super(props)
    this.state = {
      repos: []
    }
  }
  componentWillMount(){
    //通过 fetchRepos这样一个接口拿到数据
    fetchRepos("guoyongfeng")
    .then( info => {
      this.setState({
        repos: info.data
      })
    })
  }

  render (){
    return (
      <div className="project">
        <h1 className="project-title">我的项目经验</h1>
        <div className="project-content">
          <Timeline pending={<a href="#">更多</a>}>
            {
              this.state.repos.map( msg => {
                let { id, name, html_url, description } = msg;
                return (<TimelineItem key={id}
                 name={name}
                 html_url={html_url}
                 description={description}/>)
              })
            }
          </Timeline>
        </div>
      </div>
    )
  }
}

export default Project
