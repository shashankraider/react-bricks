import React from "react";
import ReactDOM from "react-dom";

export class Tile extends React.Component {
    render() {
        return (
            <div className="tile">
                <p>{`Make:-  ${this.props.makeId}`}</p>
                <p>{`Display:-  ${this.props.makeDisplay}`}</p>
                <p>{`Country:-  ${this.props.makeCountry}`}</p>
            </div>
        )
    }
}