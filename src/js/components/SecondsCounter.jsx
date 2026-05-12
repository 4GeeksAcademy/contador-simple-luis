import React from "react";

const SecondsCounter = (props) => {

    const unit = Math.floor(props.seconds / 1) % 10;
    const ten = Math.floor(props.seconds / 10) % 10;
    const hundred = Math.floor(props.seconds / 100) % 10;
    const thousand = Math.floor(props.seconds / 1000) % 10;
    const tenThousand = Math.floor(props.seconds / 10000) % 10;
    const hundredThousand = Math.floor(props.seconds / 100000) % 10;

    return (
        <div className="bigCounter d-flex justify-content-center bg-black text-white p-3">
            <div className="digit"><i className="far fa-clock"></i></div>
            <div className="digit">{hundredThousand}</div>
            <div className="digit">{tenThousand}</div>
            <div className="digit">{thousand}</div>
            <div className="digit">{hundred}</div>
            <div className="digit">{ten}</div>
            <div className="digit">{unit}</div>
        </div>
    );
};
export default SecondsCounter;