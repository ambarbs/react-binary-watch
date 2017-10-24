import React, {Component} from 'react';
import Row from './Row'
import './Row.css'
import './Watchface.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class WatchFace extends Component {
    get initialDate() {
        return {decimal: 0, binaryString: '0'};
    }

    constructor(props) {
        super(props);
        this.state = {
            seconds: this.initialDate,
            minutes: this.initialDate,
            hours: this.initialDate,
            day: this.initialDate,
            month: this.initialDate,
            year: this.initialDate
        };
        const that = this;
        setInterval(() => {
            const date = new Date();
            const seconds = this.getBinaryAndDateValue(date.getSeconds());
            const minutes = this.getBinaryAndDateValue(date.getMinutes());
            const hours = this.getBinaryAndDateValue(date.getHours());
            const day = this.getBinaryAndDateValue(date.getDate());
            const month = this.getBinaryAndDateValue(date.getMonth() + 1);
            const year = this.getBinaryAndDateValue(parseInt(date.getYear().toString().slice(-2), 10));
            that.setState({seconds, minutes, hours, day, month, year});
        }, 1000);
    }

    getBinaryAndDateValue(valFromDate) {
        return {
            decimal: ('0' + valFromDate).slice(-2),
            binaryString: ('00000' + valFromDate.toString(2)).slice(-5)
        }
    }

    render() {
        const headers = ['32', '16', '08', '04', '02', '01'];
        return (
            <div className='watchFace-gradient'>
                <div className='container'>
                    <div className=' col-xs-8'>
                        <div className='row'>
                            {headers.map((header, key) => <h4 key={key} className='col-xs-2 watchface-row-header'>{header}</h4>)}
                        </div>
                    </div>
                    <Row className='' rowTitle={'seconds'} noOfDots={6} date={this.state.seconds}/>
                    <Row className='' rowTitle={'minutes'} noOfDots={6} date={this.state.minutes}/>
                    <Row className='' rowTitle={'hours'} noOfDots={6} date={this.state.hours}/>
                    <Row className='' rowTitle={'days'} noOfDots={6} date={this.state.day}/>
                    <Row className='' rowTitle={'months'} noOfDots={6} date={this.state.month}/>
                    <Row className='' rowTitle={'years'} noOfDots={6} date={this.state.year}/>
                </div>
            </div>
        )
    }
}