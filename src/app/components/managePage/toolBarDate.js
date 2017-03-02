/**
 * Created by myzqz on 2017/2/26.
 */
import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

const Styles = {
    margin: 5
};

class ToolBarDate extends React.Component {
    constructor(props) {
        super(props);

        const minDate = new Date();
        const maxDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 1);
        minDate.setHours(0, 0, 0, 0);
        maxDate.setFullYear(maxDate.getFullYear());
        maxDate.setHours(0, 0, 0, 0);

        this.state = {
            minDate: minDate,
            maxDate: maxDate,
        };
    }

    handleChangeMinDate(event, date) {
        this.setState({
            minDate: date,
        });
    };

    handleChangeMaxDate(event, date) {
        this.setState({
            maxDate: date,
        });
    };

    handleToggle(event, toggled) {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    render() {
        return (
            <div>
                <Toolbar>
                    <ToolbarGroup>
                        <DatePicker
                            onChange={this.handleChangeMinDate.bind(this)}
                            floatingLabelText="From"
                            defaultDate={this.state.minDate}
                            style={Styles}
                        />
                        <DatePicker
                            onChange={this.handleChangeMaxDate.bind(this)}
                            floatingLabelText="To"
                            defaultDate={this.state.maxDate}
                            style={Styles}
                        />

                    </ToolbarGroup>
                    <ToolbarGroup>
                        <RaisedButton label="Search" primary={true}></RaisedButton>
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
}

export {ToolBarDate as default};