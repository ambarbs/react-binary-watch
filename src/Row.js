import React, {Component} from 'react';
import Dot from './Dot'
import './Row.css';


export default class Row extends Component {

    render() {
        const values = this.props.date.binaryString.split('').map(i => i === '1');
        return (
            <div className='col-lg-12'>
                <div className='Row col-lg-11'>
                    {/*<h1 className="Row-title">{this.props.rowTitle}</h1>*/}
                    <Dot enabled={values[0]}/>
                    <Dot enabled={values[1]}/>
                    <Dot enabled={values[2]}/>
                    <Dot enabled={values[3]}/>
                    <Dot enabled={values[4]}/>
                    <Dot enabled={values[5]}/>
                </div>
                <h1 className='col-lg-1'>{this.props.date.decimal}</h1>
            </div>
        )
    }

}

