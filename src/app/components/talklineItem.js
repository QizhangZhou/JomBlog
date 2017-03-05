/**
 * Created by Administrator on 3/3/2017.
 */
import React from 'react';
import Paper from 'material-ui/Paper'
import style from './talklineItem.css';

class TalklineItem extends React.Component{

    render(){
        const stylePaper = {
            height: 100,
            width: "100%",
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };
        let item = this.props.item;
        return(
            <div>
                <Paper style={stylePaper} zDepth={2} rounded={true}>
                    <div className={style.talklineDate}>{item.time.month}</div>
                    <div className={style.talklineText}>
                        <p>{item.Talkline}</p>
                    </div>
                </Paper>
            </div>
        );
    }
}

export {TalklineItem as default};