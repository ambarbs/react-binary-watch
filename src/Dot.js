import React, {Component} from 'react';
import './Dot.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class Dot extends Component {
    render() {
        let className = this.props.enabled ? 'Dot-enabled' : 'Dot-disabled';
        className = 'Dot ' + className + ' ';
        return (
            <div className={className}/>
        )
    }
}