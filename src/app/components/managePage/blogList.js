/**
 * Created by Administrator on 2/25/2017.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import LabelPoor from '../labelPoor';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import styleBl from './blogList.css';

const styles = {
    listItem: {
        border: "1px border lightgray"
    }
};

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
    </IconButton>
);

class BlogList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteBlogId:''
        }
    }

    componentWillMount() {
        const Cothis = this;
        fetch('/blogList', {
            method: 'GET',
            mode: 'cors',// 避免cors攻击
            credentials: 'include'
        }).then(function (response) {
            //打印返回的json数据
            response.json().then(function (data) {
                console.log(data);
                Cothis.setState({data: data});
            });
        })
            .catch(function (e) {
                console.log("Oops, error" + e.toString());
            });
    }

    removeArticle(id){
        fetch('/delblg/'+id, {
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

    rightIconMenu(id,_this) {
        return ( /*<IconMenu iconButtonElement={iconButtonElement}>
                <Link to={"/b/"+id}> <MenuItem>Edit</MenuItem></Link>
                <MenuItem >Delete</MenuItem>
            </IconMenu>*/
            <div>
                <Link to={"/b/"+id}><RaisedButton label="Edit" primary={true} /></Link>
            <RaisedButton label="Delete" primary={true} onClick={_this.removeArticle(_this,id)}/>
            </div>
        )
    }

    render() {
        var _this = this;
        if (this.state.data == null) {
            return (
                <div className={styleBl.blogListArea}>
                    {/*<LabelPoor/>*/}
                    <label>You have not blog!!</label>
                </div>
            );
        } else {
            return (
                <div className={styleBl.blogListArea}>
                    {/*<LabelPoor/>*/}
                    {this.state.data.map(function (item) {
                        return (
                            <ListItem
                                style={styles.listItem}
                                primaryText={item.title}
                                secondaryText={
                                    <p>
                                        <span style={{color: darkBlack}}>{item.creationTime}</span><br />
                                        {item.abstract}
                                    </p>
                                }
                                secondaryTextLines={2}
                            >
                                <div>
                                    <Link to={"/b/"+item._id}><RaisedButton label="Edit" primary={true} ></RaisedButton></Link>
                                    <RaisedButton label="Delete" primary={true} onClick={_this.removeArticle.bind(this,item._id)}></RaisedButton>
                                </div>
                            </ListItem>
                        );
                    })
                    }
                </div>
            );
        }
    }
}

export {BlogList as default};