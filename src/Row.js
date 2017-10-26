import React, {Component} from 'react';
import Dot from './Dot'
import './Row.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class Row extends Component {

    render() {
        const values = this.props.date.binaryString.split('').map(i => i === '1');
        return (
            <div className='row'>
                <div className='col-xs-8'>
                    <div className='row'>
                        {values.map(value =>
                            <Dot enabled={value}/>
                        )}
                    </div>
                </div>
                <div className='col-xs-offset-1 col-xs-3'>
                    <div className='row row-time-values'>
                        <h4 className='col-xs-12'>{`${this.props.date.decimal} ${this.props.rowTitle}`}</h4>
                    </div>
                </div>

            </div>
        )
    }

}

