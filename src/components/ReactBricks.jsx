import React from 'react';
import Bricks from 'bricks.js';
import InfiniteScroll from 'react-infinite-scroller';
import MDSpinner from 'react-md-spinner';

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
            hasMoreBricks : this.props.hasMore || false,
            useWindowForScroll: this.props.useWindowForScroll || false

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
        if (this.props.bricks && this.props.bricks.length > 0) {
            this.bricksInstance = this.initializeBricks();
            this.bricksInstance.pack();
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.bricks.length === 0 && this.props.bricks.length === 0)
            return;
        if (prevProps.bricks.length !== this.props.bricks.length) {
            return this.bricksInstance.update();
        }
    }
    componentWillUnmount() {
        this.bricksInstance.resize(false);
    }
    loadMore = () => {
        console.log("called");
        this.props.loadMore();
    }
    render() {
        return (
            <InfiniteScroll
            pageStart = {0}
            loadMore = {this.props.loadMoreBricks}
            hasMore = {this.state.hasMoreBricks}
            useWindow = {this.state.useWindow}>
            <div className = "masonry-class" 
                id = {this.state.containerId}
                 style = {this.props.style}>
                {this.props.bricks}
            </div>
            </InfiniteScroll>
        );
    }
}
export default ReactBricks;