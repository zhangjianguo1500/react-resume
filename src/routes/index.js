import React from 'react'
import {Router,Route,IndexRoute,hashHistory} from 'react-router'

import App from '../layouts/App'
import About from '../containers/About'
import Contact from '../containers/Contact'
import Home from '../containers/Home'
import Project from '../containers/Project'
import Skills from '../containers/Skills'

//路由配置
export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="skill" component={Skills} />
      <Route path="contact" component={Contact} />
      <Route path="about" component={About} />
      <Route path="project" component={Project} />
    </Route>
  </Router>
)
