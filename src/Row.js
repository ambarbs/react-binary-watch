import React, {Component} from 'react';
import Dot from './Dot'
import './Row.css';



export default class Row extends Component {

    render() {
        const values = this.props.binaryString.split('').map(i => i === '1');
        return (
            <div className='Row'>
                {/*<h1 className="Row-title">{this.props.rowTitle}</h1>*/}
                <Dot enabled={values[0]}/>
                <Dot enabled={values[1]}/>
                <Dot enabled={values[2]}/>
                <Dot enabled={values[3]}/>
                <Dot enabled={values[4]}/>
                <Dot enabled={values[5]}/>

            </div>
        )
    }

}

