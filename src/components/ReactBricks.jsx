import React from 'react';
import Bricks from 'bricks.js';

class ReactBricks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            containerId: `#${this.props.containerId}` || "#bricks-container",
            sizes: this.props.sizes || {
                sizes: [
                    {columns: 2, gutter: 20},
                    {mq: '768px', columns: 3, gutter: 20},
                    {mq: '1024px', columns: 6, gutter: 20}
                ]
            },
            packed: this.props.packed || 'data-packed',
            bricksInstance: this.initializeBricks()
        }
    }
    initializeBricks= () => {
        const instance = Bricks({
            container: this.props.containerId,
            packed: this.state.packed,
            sizes: this.state.sizes
        });
        return instance;
    }
    componentDidMount() {
        if (this.props.children.length > 0) {
            this.state.instance.pack();
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.children.length === 0 && this.props.children.length === 0)
            return;
        if (prevProps.children.length !== this.props.children.length) {
            return this.state.instance.update();
        }
    }
    componentWillUnmount() {
        this.state.instance.resize(false);
    }
    render() {
        return (
            <div className = "masonry-class"
                 id = {this.state.containerId}>
                {this.props.children}
            </div>
        );
    }
}
export default ReactBricks;