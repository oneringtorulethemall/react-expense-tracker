import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props: any) => {

    const dataPoints = props.dataPoints.map((i: any) => { return i.value });
    const maxExpenses = Math.max(...dataPoints)


    return (
        <div className="chart">
            {props.dataPoints.map((datapoint: any) => {
                return (
                    <ChartBar
                        key={datapoint.label}
                        value={datapoint.value}
                        maxValue={maxExpenses}
                        label={datapoint.label} />
                )
            })
            }
        </div>
    )

};

export default Chart;