/**
 * Created by Administrator on 2/20/2017.
 */
import React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircleMenu from "./components/index/circleMenu"
import injectTapEventPlugin from 'react-tap-event-plugin';
import style from '../css/index.css';

injectTapEventPlugin();

class IndexPage extends React.Component {
    render() {
        return (
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div>
                        <div className={style.indexPanel}>
                        <div className={style.indexLogo}></div>
                            <CircleMenu/>
                        </div>
                        <div className={style.indexBackground}></div>
                    </div>
                </MuiThemeProvider>
        );
    }
}
export {IndexPage as default};