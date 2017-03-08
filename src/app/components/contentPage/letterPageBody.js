/**
 * Created by Administrator on 2/21/2017.
 */
import React from 'react';
import Chip from 'material-ui/Chip';
import style from "./letterPageBody.css";
import ChipBar from '../chipBar';
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
                <div className = {style.letterTimeLabel}>
                    <div className={style.letterDate}>{blog.creationTime}</div>
                    <ChipBar label = {blog.label} style={{float:"left"}}/>
                </div>
                <div className={style.letterBody}>
                    {text}
                </div>
            </div>

        );
    }
}

export {LetterPageBody as  default};