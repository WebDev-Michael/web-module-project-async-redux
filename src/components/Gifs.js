import React from "react";

const Gif = props => {
    const {gif} = props;

    return (
        <div className="gif">
            <h3>{gif.title}</h3>
            <p>{gif.username}</p>
            <img width="200" src={gif.images.original.url}/>
            <p>Rating: <strong>{gif.rating}</strong></p>
            <a href={gif.url}><button>Check it out on giphy</button></a>
        </div>
    );
}
export default Gif;