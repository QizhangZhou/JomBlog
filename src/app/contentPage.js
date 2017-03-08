/**
 * Created by Administrator on 2/21/2017.
 */
import React from 'react';
import {Link} from 'react-router';
import Paper from "material-ui/Paper";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import LetterPageBody from './components/contentPage/letterPageBody';
import LetterPageFooter from './components/contentPage/letterPageFooter';
import TopBar from "./components/topBar";
import CirclePaper from './components/circlePaper';
import style from "../css/contentPage.css";
import backImg from "../img/backIcon.png";

const styleP = {
    height: "100%",
    width: "100%",
    margin: 20,
    padding: "30px 50px",
    textAlign: 'center',
    display: 'inline-block',
}

class ContentPage extends React.Component {
    constructor(props){
        super(props);
        this.state={data:{id: '1123',
            title: '123',
            label: ['1','jdjd'],
            abstract: 'sdfsdf',
            creationTime: 'time',
            body:"sdfsdfsdjdjdj能你fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你jdjdj能你fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第fsdfsdjdjdj能你觉得为什么第觉得为什么第",
            author: 'yours'}};
    }
    componentWillMount() {
        let Cothis = this;
        let id = this.props.params.id;
        fetch('/blog/' + id, {
            method: 'GET',
            mode: 'cors',// 避免cors攻击
            credentials: 'include'
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (data) {
                Cothis.setState({data:data[0]});
            });
        })
            .catch(function (e) {
                console.log("Oops, error" + e.toString());
            });
    }

    render() {
        let blog = this.state.data;
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <TopBar/>

                    <div className={style.letterPage}>
                        <Paper style={styleP} zDepth={2} rounded={false}>
                            <div className={style.avatar}>
                                <div style={{marginRight:"50px"}}>
                                    <img src="http://www.clazqz.com/avatar.jpg"></img>
                                </div>
                            </div>
                            <LetterPageBody blog = {blog}></LetterPageBody>
                            <LetterPageFooter></LetterPageFooter>
                        </Paper>
                            <Link to="/blog">
                                <CirclePaper img={backImg} radius={60} className={style.letterPageBtnBack}/>
                            </Link>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

}

export {ContentPage as default};