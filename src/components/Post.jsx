import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Post(props) {
    return (
        <div className="post">
            <img src={props.imageUrl} className="post--img" />
            <div className="post--info">
                <div className="info--header">
                    <FontAwesomeIcon icon={faLocationDot} color="#F55A5A" size="2xs" />
                    <p className="post--location">{props.location}</p>
                    <a href={props.googleMapsUrl} className="location-link">View on Google Maps</a>
                </div>
                <h1 className="post--title">{props.title}</h1>
                <p className="post--dates">{`${props.startDate} - ${props.endDate}`}</p>
                <p className="post--description">{props.description}</p>
            </div>
        </div>
    );
}