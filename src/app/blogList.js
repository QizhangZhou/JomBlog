/**
 * Created by Administrator on 2/20/2017.
 */
"use strict"
import React from "react";
import BlogCard from "./components/blogList/blogCard";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import styleBlog from "../css/blogList.css";
import TopBar from "./components/topBar";
import Avatar from './components/avatar';
import CirclePaper from './components/circlePaper';
import {Link} from "react-router";
//import injectTapEventPlugin from 'react-tap-event-plugin';


class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentWillMount() {
        const Cothis = this;
        fetch('/blogList', {
            method: 'GET',
            mode: 'cors',// 避免cors攻击
            credentials: 'include'
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (data) {
                Cothis.setState({data: data});
            });
        })
            .catch(function (e) {
                console.log("Oops, error" + e.toString());
            });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <TopBar/>
                    <Avatar/>
                    <div className={styleBlog.blogList}>
                        {this.state.data.map(function (item) {
                            return (
                                <BlogCard lnk={("/blog/page")} item={(item)}/>
                            );
                        })
                        }
                    </div>
                    <Link to="/">
                        <CirclePaper img={("url('../src/img/backIcon.png')")} radius={60} className={styleBlog.BtnBack}/>
                    </Link>
                </div>
            </MuiThemeProvider>
        );
    }
}

export {BlogPage as default};