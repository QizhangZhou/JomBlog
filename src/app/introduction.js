/**
 * Created by Administrator on 3/3/2017.
 */
import React from "react";
import style from "../css/introduction.css";
import TopBar from "./components/topBar";
import Avatar from './components/avatar';
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import infoImg from  '../img/info.png';
import CapGraph from  '../img/CapGraph.png';
import ExGraph from  '../img/ExGraph.png';
import FGraph from  '../img/FGraph.png';

class Introduction extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <TopBar/>
                    <div className={style.avatar}>
                        <Avatar style={{left:"10%"}}/>
                    </div>
                    <div className={style.main}>
                        <div className={style.info}><img src={infoImg} width="328" height="167"/></div>
                        <div className={style.CapGraph}><img src={CapGraph} width="500" height="341"/></div>
                        <div className={style.ExGraph}><img src={ExGraph} width="728" height="277"/></div>
                        <div className={style.FGraph}><img src={FGraph} width="700" height="431"/></div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export {Introduction as default};