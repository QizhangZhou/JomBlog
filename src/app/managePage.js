/**
 * Created by Administrator on 2/24/2017.
 */
import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from  "material-ui/styles/getMuiTheme";
import DropDownList from "./components/dropDownList";
import WriteBlog from "./components/managePage/writeBlog";
import DrawerMenu from "./components/managePage/drawerMenu";


class ManagePage extends React.Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div>
                    <DrawerMenu></DrawerMenu>
                    {/*<WriteBlog></WriteBlog>*/}
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

export {ManagePage as default}