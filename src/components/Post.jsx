import React from 'react';

export default function Post(props) {

    return (
        <div className="card bg-primary text-white mb-1" style={{ width: "18rem" }}>
            <img src="https://image.flaticon.com/icons/svg/2921/2921762.svg" className="card-img-top" style={{ width: "32px" }} alt="img" />
            <div className="card-body">
                <h5 className="card-title rounded-pill text-center bg-dark p-3 mb-1">{props.title}</h5>
                <p className="card-text bg-secondary p-2">{props.body}.</p>
                <a href={"#" + props.userId} className="btn btn-info">Author id: {props.userId}</a>
            </div>
        </div>
    );

}