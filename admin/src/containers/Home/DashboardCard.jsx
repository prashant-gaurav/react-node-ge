import React from 'react';
import '../../assets/scss/dashbord.scss';

export default function Count(props) {
    const {count, title, icons} = props;
    return (
        <div className='container'>
            <div className="card">
                <div className="row">
                    <div className="left">
                        <img src={icons} className="icon" alt="Income"/>
                    </div>
                    <div className="right">
                        <h2 className="title">{title}</h2>
                        <h2 className="count">{count}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
