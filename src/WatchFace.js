import React, {Component} from 'react';
import Row from './Row'
import './Row.css'
import './Watchface.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class WatchFace extends Component {
    get initialDate () {
        return {decimal: 0, binaryString: '0'};
    }

    constructor(props) {
        super(props);
        this.state = {seconds: this.initialDate, minutes: this.initialDate, hours: this.initialDate, day: this.initialDate, month: this.initialDate, year: this.initialDate};
        const that = this;
        setInterval(() => {
            const date = new Date();
            const seconds = this.getBinaryAndDateValue(date.getSeconds());
            const minutes = this.getBinaryAndDateValue(date.getMinutes());
            const hours = this.getBinaryAndDateValue(date.getHours());
            const day = this.getBinaryAndDateValue(date.getDate());
            const month = this.getBinaryAndDateValue(date.getMonth());
            const year = this.getBinaryAndDateValue(parseInt(date.getYear().toString().slice(-2)));
            that.setState({seconds, minutes, hours, day, month, year});
        }, 1000);
    }

    getBinaryAndDateValue(valFromDate){
        return{
            decimal: valFromDate,
            binaryString: this.addZerosInTheLeft(valFromDate.toString(2))
        }
    }

    addZerosInTheLeft(binaryString) {
        const diff = 6 - binaryString.length;
        for (let i = 0; i < diff; i++) {
            binaryString = '0' + binaryString;
        }
        return binaryString;
    }

    render() {
        const headers = ['32', '16', '08', '04', '02', '01']
        return (
            <div>
                {/*<div className=''>*/}
                    {/*{headers.map(header => <h2 className='col-lg-2'>{header}</h2>)}*/}
                {/*</div>*/}
                <Row className='' rowTitle={'second'} noOfDots={6} date={this.state.seconds}/>
                <Row className='' rowTitle={'minute'} noOfDots={6} date={this.state.minutes}/>
                <Row className='' rowTitle={'hour'} noOfDots={6} date={this.state.hours}/>
                <Row className='' rowTitle={'date'} noOfDots={6} date={this.state.day}/>
                <Row className='' rowTitle={'month'} noOfDots={6} date={this.state.month}/>
                <Row className='' rowTitle={'year'} noOfDots={6} date={this.state.year}/>
            </div>
        )
    }
}