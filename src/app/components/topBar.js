/**
 * Created by Administrator on 2/20/2017.
 */
import React from "react";
import AppBar from "material-ui/AppBar";
import styleTopBar from "./topBar.css";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router';

class TopBar extends React.Component {
    render() {
        return (
            <div className={styleTopBar.topBar}>

                    <FloatingActionButton mini={true} href="/mag" backgroundColor={"#000000"}>
                        <Link to="/mag"> <ContentAdd /></Link>
                    </FloatingActionButton>

            </div>
        );
    }
}

export {TopBar as default};