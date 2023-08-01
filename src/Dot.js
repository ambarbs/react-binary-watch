import React, {Component} from 'react';
import './Dot.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class Dot extends Component {
    render() {
        let className = this.props.enabled ? 'Dot-enabled gradient-true' : 'Dot-disabled gradient-false';
        const textColor = this.props.enabled ? 'dot-true-text' : 'dot-false-text';
        const oneOrZero = this.props.enabled ? '1' : '0';
        className = 'Dot ' + className + ' col-xs-2';
        return (
            <div className={className}>
                <div className={textColor}>{oneOrZero}</div>
            </div>
        )
    }
}