import React, {Component} from 'react';
import Dot from './Dot'
import './Row.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class Row extends Component {

    render() {
        const values = this.props.date.binaryString.split('').map(i => i === '1');
        return (
            <div className='row'>
                <div className=' col-xs-8'>
                    <div className='row'>
                        {/*<h1 className="Row-title">{this.props.rowTitle}</h1>*/}
                        <Dot enabled={values[0]}/>
                        <Dot enabled={values[1]}/>
                        <Dot enabled={values[2]}/>
                        <Dot enabled={values[3]}/>
                        <Dot enabled={values[4]}/>
                        <Dot enabled={values[5]}/>
                    </div>
                </div>
                <div className='col-xs-3'>
                    <div className='row row-time-values'>
                        <h4 className='col-xs-12'>{`${this.props.date.decimal} ${this.props.rowTitle}`}</h4>
                        {/*<h1 className='col-xs-9'>{this.props.rowTitle}</h1>*/}
                    </div>
                </div>

            </div>
        )
    }

}

