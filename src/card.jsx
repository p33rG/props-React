import React from "react";

function card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} className="card__img" />
                    <div className="card__info">
                        <span className="category">{props.title}</span>
                        <h3 className="title">{props.name}</h3>
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default card;