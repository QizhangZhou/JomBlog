/**
 * Created by Administrator on 2/19/2017.
 */
import React from "react";
import ReactDOM from "react-dom";
import IndexImg from "./app/indexPage";
import BlogPage from "./app/blogList";
import ContentPage from './app/contentPage';
import ManagePage from './app/managePage';
import WriteBlog from './app/components/managePage/writeBlog';
import WrtieTalkline from './app/components/managePage/writeTalkline';
import BlogList from './app/components/managePage/blogList';
import TalklineList from './app/components/managePage/talklineList';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={IndexImg}/>
        <Route path='/blog' component={BlogPage}/>
        <Route path='/blog/page/:id' component={ContentPage}/>
        <Route path='/blog/pageblog' component={ContentPage}/>
        <Route path='/lab' component={IndexImg}/>
        <Route path='mag' component={ManagePage}>
            {/*<IndexRoute component={DrawerMenu}/>*/}
            <Route path='wBlog' component={WriteBlog}/>
            <Route path='wTalkline' component={WrtieTalkline}/>
            <Route path='blogList' component={BlogList}/>
            <Route path="tlList" components={TalklineList}/>
            <Route path='/b/:id' component={WriteBlog}/>
        </Route>
    </Router>,
    document.getElementById('root')
);

/*
 ReactDOM.render(
 <div>
 <IndexImg/>
 </div>,
 document.getElementById('root')
 )*/
