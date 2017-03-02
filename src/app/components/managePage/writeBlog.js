/**
 * Created by Administrator on 2/24/2017.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {Form} from 'react-form';
import LabelDialog from './labelDialog';
import Chip from 'material-ui/Chip';
import styleWB from './writeBlog.css';

const style = {
    width: "100%",
    margin: 12,
};

class WriteBlog extends React.Component {
    constructor(props) {
        super(props);
        var dateb = new Date();
        dateb.setFullYear(dateb.getFullYear());
        this.state = {
            title: '',
            label: [],
            abstract: '',
            body: '',
            creationTime: dateb,
            author: 'calvin'
        };
    }

    componentWillMount() {
        let Cothis = this;
        if (this.props.params.id != null) {
            let id = this.props.params.id;

            fetch('/blog/' + id, {
                method: 'GET',
                mode: 'cors',// 避免cors攻击
                credentials: 'include'
            }).then(function (response) {
                //打印返回的json数据
                response.json().then(function (data) {
                    console.log(data);
                    Cothis.setState(data[0]);
                });
            })
                .catch(function (e) {
                    console.log("Oops, error" + e.toString());
                });
        }
    }

    handleChange(name, evnt) {
        var newstate = {};
        newstate[name] = evnt.target.value;
        this.setState(newstate);
    }

    handleDateChange(event, date) {
        this.setState({creationTime: date});
    }

    handleSelected(label1) {
        this.setState({label: label1});
    }

    handleSubmit() {
        let posturl
        if (this.props.params.id != null) {
            posturl = '/editblog/' + this.props.params.id;
        } else {
            posturl = '/addblog';
        }
        fetch(posturl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({blog:{
                "title": this.state.title,
                "creationTime": this.state.creationTime,
                "abstract": this.state.abstract,
                "label": this.state.label,
                "author": this.state.author,
                "body": this.state.body
            }})
        }).then(res => res.json())
            .then(json => console.log(json))
            .catch(error => console.log(error));


    }

    render() {

        return (
            <div className={styleWB.editArea}>
                <Form onSubmit={this.handleSubmit}>
                    <TextField
                        hintText="HeadLined"
                        floatingLabelText="Blog HeadLined"
                        style={style}
                        value={this.state.title}
                        onChange={this.handleChange.bind(this, 'title')}
                    /><br />
                    <DatePicker
                        floatingLabelText="Date"
                        defaultDate={this.state.creationTime}
                        onChange={this.handleDateChange.bind(this, 'creationTime')}
                    />
                    <LabelDialog handleSelected={this.handleSelected.bind(this)}/>
                    <div>
                        { this.state.label != null ? (
                                this.state.label.map(item => {
                                    var styles = {
                                        margin: 10,
                                        float: "left"
                                    };
                                    return (
                                        <Chip
                                            style={styles}
                                            backgroundColor={"#ac7aff"}
                                            labelColor={"#ffffff"}
                                        >
                                            {item}
                                        </Chip>
                                    );
                                })) : {}
                        }

                    </div>
                    <TextField
                        hintText="Abstract"
                        floatingLabelText="This is Abstract!"
                        style={style}
                        multiLine={true}
                        rows={2}
                        value={this.state.abstract}
                        onChange={this.handleChange.bind(this, 'abstract')}
                    />
                    <TextField
                        hintText="Blog Body Text"
                        floatingLabelText="this is the blog body"
                        style={style}
                        multiLine={true}
                        rows={2}
                        value={this.state.body}
                        onChange={this.handleChange.bind(this, 'body')}
                    />
                    <RaisedButton label="submit" primary={true} type="submit" onClick={this.handleSubmit.bind(this)}/>

                </Form>
            </div>
        );
    }
}

export {WriteBlog as default};