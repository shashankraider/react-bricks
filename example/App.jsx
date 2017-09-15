import React from "react";
import ReactDOM from "react-dom";
import ReactBricks from "../src/components/ReactBricks";
import "./styles/app.scss"

export default class App extends React.Component {
   
    constructor(props) {
        super(props);
        this.colors = ['#EC407A', '#EF5350', '#AB47BC', '#7E57C2', '#5C6BC0', '#42A5F5', '#29B6F6', '#26C6DA', '#26A69A', '#66BB6A', '#9CCC65', '#827717', '#EF6C00'];
        this.heights = [200, 300, 300, 400, 400, 450];
        this.elements = this.generateElements();
        this.state = {
            children: this.getChildren()
        }
    
    }
    componentWillReceiveProps(nextProps) {
        this.setState({children: this.getChildren()});
    }
    getRandomElement = (array) => {
        return array[Math.floor(Math.random() * array.length)];
    }
    generateElements = () => [...Array(10).keys()].map(() => ({
        key: Math.random(),
        color: this.getRandomElement(this.colors),
        height: `${this.getRandomElement(this.heights)}px`,
    }));
    getChildren = () => {
        let results = null;
            results = this.elements.map(({key, color, height}, i) => {
                return (
                    <div key={key} className="card" style={{background: color, height}}>
                                <h2>{i}</h2>
                            </div>
                );
            });
            return results;
    }

    render() {
        return(
            <div className="app">
                <ReactBricks
            children= {this.state.children}
            />
            </div>

        );
    }

}