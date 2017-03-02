/**
 * Created by myzqz on 2017/2/25.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ToolBarDate from './toolBarDate';
import styletl from './talklineList.css';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
    listItem: {
        border: "1px border lightgray"
    }
};

class TalklineList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const Cothis = this;
        fetch('/ntl', {
            method: 'GET',
            mode: 'cors',// 避免cors攻击
            credentials: 'include'
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (data) {
                Cothis.setState({data: data});
            });
        })
            .catch(function (e) {
                console.log("Oops, error");
            });
    }

    handleDelete(id){
        fetch('/delTlkln/'+id, {
            method: 'GET',
            mode: 'cors',// 避免cors攻击
            credentials: 'include'
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (data) {
                alert(data);
            });
        })
            .catch(function (e) {
                console.log("Oops, error" + e.toString());
            });
    }
    render() {
        let _this = this;
        if (this.state == null) {
            return (
                <div className={styletl.talklineArea}>
                    <ToolBarDate></ToolBarDate>
                    <label>You have not talkline!!</label>
                </div>
            );
        } else {
            return (
                <div className={styletl.talklineArea}>
                    <ToolBarDate></ToolBarDate>
                    {this.state.data.map(function (item) {
                        return (
                            <div>
                            <ListItem
                                primaryText={item.time.month}
                                secondaryText={
                                    <p>
                                        {item.Talkline}
                                    </p>
                                }
                                secondaryTextLines={2}
                            >
                      <RaisedButton label="Delete" primary={true} type="submit" onClick={_this.handleDelete.bind(this,item._id)}/>
                        </ListItem>
                        </div>
                        );
                    })
                    }
                </div>
            );
        }


    }
}

export {TalklineList as default};