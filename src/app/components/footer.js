/**
 * Created by Administrator on 3/3/2017.
 */
import React from "react";
import style from "./footer.css";
import {Link} from "react-router";

class  Footer extends React.Component{
    render(){
        return(
            <div className={style.footer}>
                <div>
                    <Link to="/mag">  <div>Calvin Zhou</div></Link>
                    <div>Power by Jade of Moon Studio</div>
                    <div>by MaterialUI React React-route Webpack Nodejs Express Mongodb</div>
                    <div>Github:</div>
                </div>
            </div>
        );
    }
}

export {Footer as default};