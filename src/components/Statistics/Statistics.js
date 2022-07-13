import { Component } from 'react';
import stl from './Statistics.module.css';

export class Statistics extends Component {
    render() {
        return (
            < div className={stl.stat_box} >
                <h1 className={stl.stat_title}>Statistics</h1>
                <ul className={stl.stat_list}>
                    <li className={stl.stat_item}>Good:</li>
                    <li className={stl.stat_item}>Neutral:</li>
                    <li className={stl.stat_item}>Bad:</li>
                </ul>
            </div >
        );

    };
};

export default Statistics;