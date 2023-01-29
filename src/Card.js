
import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt={props.title} className="card-img" />
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <spam className="rate">{props.rate} </spam>
                <div className="card-items">{props.items}</div>
                <div className="sizes">{props.sizes}</div>

            </div>

        </div>

    );
}

export default Card;
