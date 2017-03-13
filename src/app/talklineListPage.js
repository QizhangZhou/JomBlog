/**
 * Created by myzqz on 2017/2/25.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import styletl from '../css/talklineList.css';
import TopBar from "./components/topBar";
import CirclePaper from './components/circlePaper';
import Footer from "./components/footer";
import TalklineItem from "./components/talklineItem";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {Link} from 'react-router';
import backImg from "../img/backIcon.png";


const styles = {
    listItem: {
        border: "1px border lightgray"
    }
};

class TalklineListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
         const Cothis = this;
         fetch('/ntl', {
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
         console.log("Oops, error");
         });
    }

    render() {
        let _this = this;
        if (this.state.data == null) {
            return (
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div className={styletl.talklineArea}>
                        <TopBar/>
                        <label>You have not talkline!!</label>
                    </div>
                    <Link to="/">
                        <CirclePaper img={backImg} radius={60} className={styletl.BtnBack}/>
                    </Link>
                </MuiThemeProvider>
            );
        } else {
            return (
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div >
                        <TopBar/>
                        <div className={styletl.talklineArea}>
                            {this.state.data.map(function (item) {
                                return (
                                    <div>
                                        <TalklineItem item = {item}></TalklineItem>
                                    </div>
                                );
                            })
                            }
                        </div>
                        <Link to="/">
                            <CirclePaper img={backImg} radius={60} className={styletl.BtnBack}/>
                        </Link>
                        <Footer></Footer>
                    </div>
                </MuiThemeProvider>
            );
        }


    }
}

export {TalklineListPage as default};