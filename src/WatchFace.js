import React, {Component} from 'react';
import Row from './Row'
import './Row.css'
import './Watchface.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class WatchFace extends Component {
    static get initialDate() {
        return {decimal: 0, binaryString: '000000'};
    }

    static get stateKeys(){
        return ['seconds', 'minutes', 'hours', 'days', 'months', 'years'];
    }

    constructor(props) {
        super(props);
        let states = {};
        WatchFace.stateKeys.forEach( key => {
            states[key] = WatchFace.initialDate;
        });
        this.state = states;
        const that = this;
        setInterval(() => {
            const date = new Date();
            const seconds = this.getBinaryAndDateValue(date.getSeconds());
            const minutes = this.getBinaryAndDateValue(date.getMinutes());
            const hours = this.getBinaryAndDateValue(date.getHours());
            const days = this.getBinaryAndDateValue(date.getDate());
            const months = this.getBinaryAndDateValue(date.getMonth() + 1);
            const years = this.getBinaryAndDateValue(parseInt(date.getYear().toString().slice(-2), 10));
            that.setState({seconds, minutes, hours, days, months, years});
        }, 1000);
    }

    getBinaryAndDateValue(valFromDate) {
        return {
            decimal: ('0' + valFromDate).slice(-2),
            binaryString: ('00000' + valFromDate.toString(2)).slice(-6)
        }
    }


    render() {
        const headers = ['32', '16', '08', '04', '02', '01'];

        return (
            <div className='watchFace-gradient'>
                <div className='container'>
                    <div className=' col-xs-8'>
                        <div className='row'>
                            {headers.map((header, key) =>
                                <h4 key={key} className='col-xs-2 watchface-row-header'>{header}</h4>
                            )}
                        </div>
                    </div>
                    {Object.entries(this.state).map(item =>
                        <Row key={item[0]} rowTitle={item[0]} date={item[1]}/>
                    )}
                </div>
            </div>
        )
    }
}
