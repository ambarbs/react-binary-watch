import React, {Component} from 'react';
import Row from './Row'
import './Watchface.css';

export default class WatchFace extends Component {

    constructor(props) {
        super(props);
        this.state = {seconds: '0', minutes: '0', hours: '0', day: '0', month: '0', year: '0'};
        const that = this;
        setInterval(() => {
            const date = new Date();
            const seconds = this.addZerosInTheLeft(date.getSeconds().toString(2));
            const minutes = this.addZerosInTheLeft(date.getMinutes().toString(2));
            const hours = this.addZerosInTheLeft(date.getHours().toString(2));
            const day = this.addZerosInTheLeft(date.getDay().toString(2));
            const month = this.addZerosInTheLeft(date.getMonth().toString(2));
            const year = this.addZerosInTheLeft(parseInt(date.getYear().toString().slice(-2)).toString(2));
            that.setState({seconds, minutes, hours, day, month, year});
        }, 1000);
    }

    addZerosInTheLeft(binaryString) {
        const diff = 6 - binaryString.length;
        for (let i = 0; i < diff; i++) {
            binaryString = '0' + binaryString;
        }
        return binaryString;
    }

    render() {
        return (
            <div>
                <Row className='' rowTitle={'second'} noOfDots={6} binaryString={this.state.seconds}/>
                <Row className='' rowTitle={'second'} noOfDots={6} binaryString={this.state.minutes}/>
                <Row className='' rowTitle={'second'} noOfDots={6} binaryString={this.state.hours}/>
                <Row className='' rowTitle={'second'} noOfDots={6} binaryString={this.state.day}/>
                <Row className='' rowTitle={'second'} noOfDots={6} binaryString={this.state.month}/>
                <Row className='' rowTitle={'second'} noOfDots={6} binaryString={this.state.year}/>
            </div>
        )
    }
}