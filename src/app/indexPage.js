/**
 * Created by Administrator on 2/20/2017.
 */
import React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircleMenu from "./components/index/circleMenu"
import injectTapEventPlugin from 'react-tap-event-plugin';
import style from '../css/index.css';
import bkImg from "../img/homeImg.png";
import headerlogo from "../img/indexHeadrImg.png";

injectTapEventPlugin();

class IndexPage extends React.Component {
    render() {
        return (
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div>
                        <div className={style.indexPanel}>
                        <div className={style.indexLogo}>
                            <img src={headerlogo} width="100%" height = "100%"/>
                        </div>
                            <CircleMenu/>
                        </div>
                        <div className={style.indexBackground}>
                            <img src="http://omjbty4p8.bkt.clouddn.com/indexbk.png" width="100%" height = "100%"/>
                        </div>
                    </div>
                </MuiThemeProvider>
        );
    }
}
export {IndexPage as default};