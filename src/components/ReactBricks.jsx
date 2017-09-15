import React from 'react';
import Bricks from 'bricks.js';

class ReactBricks extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            containerId: this.props.containerId || "bricks-container",
            sizes: this.props.sizes || [
                    {columns: 2, gutter: 20},
                    {mq: '768px', columns: 3, gutter: 20},
                    {mq: '1024px', columns: 6, gutter: 20}
                ],
            packed: this.props.packed || "data-packed",
        }
    }
    initializeBricks = () => {
        const instance = Bricks({
            container: `#${this.state.containerId}`,
            packed: this.state.packed,
            sizes: [
                    {columns: 2, gutter: 20},
                    {mq: '768px', columns: 3, gutter: 20},
                    {mq: '1024px', columns: 4, gutter: 20}
                ]
        });
        return instance;
    }
    componentDidMount() {
        if (this.props.children && this.props.children.length > 0) {
            this.bricksInstance = this.initializeBricks();
            this.bricksInstance.pack();
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.children.length === 0 && this.props.children.length === 0)
            return;
        if (prevProps.children.length !== this.props.children.length) {
            return this.bricksInstance.update();
        }
    }
    componentWillUnmount() {
        this.bricksInstance.resize(false);
    }
    render() {
        return (
            <div className = "masonry-class" 
                 id = {this.state.containerId}
                 style = {this.props.style}>
                {this.props.children}
            </div>
        );
    }
}
export default ReactBricks;