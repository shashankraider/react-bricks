React Bricks 
====================

React Bricks is a react component for [bricks.js](https://github.com/callmecavs/bricks.js). Which also supports Infinite scroll Feature

## Install

```bash
$ npm install react-bricks-infinite
```

## Usage

```js
import React from "react";
import ReactBricks from "react-bricks-infinite";

class Bricks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bricks: this.getBricks(),
            reRender: false,
            containerId: "bricks-container-app",
            hasMoreBricks: true
        }

    }
     getBricks = () => { 
         let results = null;
        results = this.elements.map(({key, value}, i) => {
            return (
                <div key={key}
                      className="card">
                      <h1>{i}</h1>
                      <p>{value}</p>
                </div>     
            );
        });
        return results;
    }
     render() {
        return(
            <div className="app">
                <ReactBricks
                containerId = {this.containerId}
                loadMoreBricks = {this.loadMore}
                hasMoreBricks  = {true}
                reRender = {this.state.reRender}
                bricks= {this.state.bricks}
                defaultLoaderStyle = {this.defaultLoaderStyle}
                />
            </div>
        );
    }
}
```

## License

MIT.
