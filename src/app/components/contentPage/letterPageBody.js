/**
 * Created by Administrator on 2/21/2017.
 */
import React from 'react';
import Chip from 'material-ui/Chip';
import style from "./letterPageBody.css";
import { mdReact } from 'markdown-react-js';

class LetterPageBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let blog = this.props.blog;
        let text;
        console.log("blog label",blog.label);
        if(blog.body == null){
            text = '';
        }else{
            text = mdReact()(blog.body);
        }
        return (
            <div>
                <div className={style.letterTitle}>
                    <h1>{blog.title}</h1>
                </div>
                <div className={style.letterDate}>
                    <h5>{blog.creationTime}</h5>
                </div>
                <div className={style.letterBody}>
                    {text}
                </div>
            </div>

        );
    }
}

export {LetterPageBody as  default};