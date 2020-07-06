import React from 'react';
import {LineChart, Line, XAxis, YAxis, ResponsiveContainer} from 'recharts';
import '../../assets/scss/dashbord.scss';


export default function Count(props) {
    const {title, graphData} = props;
    return (
        <div className='container'>
            <div className="graph-card">
                <h2 className='title'>{title}</h2>
                <ResponsiveContainer>
                    <LineChart margin={{top: 16, bottom: 0,}} data={graphData}>
                        <XAxis dataKey="time" stroke='#fff'/>
                        <YAxis stroke='#fff'/>
                        <Line type="monotone" dataKey="amount" stroke='#fff' dot={true}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
