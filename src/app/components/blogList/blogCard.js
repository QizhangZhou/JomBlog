/**
 * Created by Administrator on 2/20/2017.
 */
import React from "react";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styleBlogCard from './blogCard.css';
import {Link} from 'react-router';
import $ from 'jquery';

class BlogCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: {
                id: '',
                title: '',
                label: [],
                abstract: '',
                creationTime: '',
                author: ''
            }
        }
    }

    componentDidMount(){
        this.setState({data:this.props.item});
    }


    render(){
        let item = this.props.item;

        return(
            <Card className={styleBlogCard.blogCard}>
                <CardHeader
                    title={this.state.data.title}
                    subtitle={this.state.author + ' '+this.state.data.creationTime}
                    actAsExpander={true}
                    showExpandableButton={true}
                    titleStyle={{fontSize:20,fontWeight:"bold"}}
                />
                <CardActions>
                    <Link to={"/blog/page/"+item._id}><FlatButton label="Reade This Content" /></Link>
                    <FlatButton label="Action2" />
                </CardActions>
                <CardText expandable={true} style={{fontWeight:"bold"}}>
                    {this.state.data.abstract}
                </CardText>
            </Card>
        );
    }
}

export {BlogCard as default};