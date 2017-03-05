/**
 * Created by Administrator on 3/3/2017.
 */
import React from "react";
import style from "../css/introduction.css";
import TopBar from "./components/topBar";
import Avatar from './components/avatar';
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
                        <div className={style.info}><img src="src/img/info.png" width="328" height="167"/></div>
                        <div className={style.CapGraph}><img src="src/img/CapGraph.png" width="500" height="341"/></div>
                        <div className={style.ExGraph}><img src="src/img/ExGraph.png" width="728" height="277"/></div>
                        <div className={style.FGraph}><img src="src/img/FGraph.png" width="700" height="431"/></div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export {Introduction as default};