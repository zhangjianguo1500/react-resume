import React, { Component }from 'react'

import './index.css'
import { Modal } from 'antd'

class Contact extends Component {
  //定义初始数据,
  constructor(props){
    super(props)
    this.state = {
      visible : false,
      img: ''
    }
    //修改关键字的指向
    this.handCancel = this.handCancel.bind(this)
    this.showModal = this.showModal.bind(this)
  }
  handCancel(e){
    this.setState({
      visible: false,
      img: ''
    })
  }
  showModal(e){
    this.setState({
      visible: true,
      img: e.currentTarget.getAttribute("data-src")
    })
  }
  render (){
    return (
      <div className="contact">
        <h1 className="contact-title">联系我</h1>
        <div className="contact-content">
          <div className="contact-main">
            <div className="main-item"
              data-src="https://avatars2.githubusercontent.com/u/16996942?v=3&s=460"
              onClick={this.showModal}>
              <div className="contact-icon">
                <i className="iconfont icon-weixin"></i>
                <div className="item-content">我的微信：13062739856</div>
              </div>
            </div>
            <div className="main-item"
              data-src="http://www.szzzw.gov.cn/uploadfile/2015/0812/20150812090525489.png"
              onClick={this.showModal}>
              <div className="contact-icon">
                <i className="iconfont icon-qq"></i>
                <div className="item-content">QQ：14963286936</div>
              </div>
            </div>
            <a  href="mailto:14963286936@qq.com" className="main-item">
              <div className="contact-icon">
                <i className="iconfont icon-email"></i>
                <div className="item-content">邮箱：14963286936@qq.com</div>
              </div>
            </a>
          </div>
          <div className="contact-other">
            <p className="other-title">其他方式</p>
            <div className="other-content">
              <a href="" className="other-item">
                <i className="iconfont icon-github"></i>
              </a>
              <a href="" className="other-item">
                <i className="iconfont icon-zhihu"></i>
              </a>
              <a href="" className="other-item">
                <i className="iconfont icon-weibo"></i>
              </a>
            </div>
          </div>
          <Modal footer=""
            title=""
            visible={this.state.visible}
            onCancel={this.handCancel}>
            <div style={{width: "100%", textAlign: "center"}}>
              <img style={{maxWidth: "100%"}} src={this.state.img} alt=""/>
            </div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Contact
