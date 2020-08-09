import React from 'react';
import './Cards.css';
import '../tailwind.output.css';

function Cards (props){
    return(
    <div>
        <div className="rounded  shadow-lg p-3 bg-white  card ">
            <h1 className="text-2xl font-bold"> {props.title} </h1>
            <h5 className="text-sm italic mb-4">Par {props.pseudo}</h5>
            <p className="overflow-auto h-32 p-1 antialiased"> {props.histoire} </p>
        </div>

    </div>
    )
}

export default Cards;