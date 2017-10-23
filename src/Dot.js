import React, {Component} from 'react';
import './Dot.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {RadioButton} from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class Dot extends Component {
    render() {
        let className = this.props.enabled ? 'Dot-enabled' : 'Dot-disabled';
        className = 'Dot ' + className + ' ';
        return (
            <div className={className}>

            </div>
        )
    }

    get styles() {
        return {
            block: {
                maxWidth: 250,
            },
            radioButton: {
                marginBottom: 16,
            },
        }
    }
}