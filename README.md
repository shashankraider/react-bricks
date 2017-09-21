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
                hasMoreBricks  = {this.state.hasMoreBricks}
                reRender = {this.state.reRender}
                bricks= {this.state.bricks}
                defaultLoaderStyle = {this.defaultLoaderStyle}
                />
            </div>
        );
    }
}
```

## Props

### containerId

Id of the container of the grid which will contain the bricks, Default it has  `id = "bricks-container"`  

```es6
 return(
            <div>
                <ReactBricks
                containerId = "bricks-container"
                .
                .
                .
                />
            </div>
        );
 ```       

### bricks
   

bricks are the list of child items which will be part of the grid 


```es6
 return(
            <div>
                <ReactBricks
                bricks= {this.state.bricks}
                .
                .
                .
                />
            </div>
        );
 ``` 

### hasMoreBricks
 
 This is `type = boolean` field required to be `true` in case their are more bricks/items to be loaded in the grid.
 If `false` Event listeners asscoiated are removed . By default it has value `false`

### sizes
Its an array of objects describing the properties of grid container at different window breakpoints.

#### How does each object looks like :-

```es6
{ mq: '768px', columns: 3, gutter: 25 }

// mq      - the minimum viewport width (String CSS unit: em, px, rem)
// columns - the number of vertical columns
// gutter  - the space (in px) between the columns and grid items

```

By default the sizes value is 

```es6
 sizes= [
        {columns: 2, gutter: 20},
        {mq: '768px', columns: 3, gutter: 25},
        {mq: '1024px', columns: 5, gutter: 40}
    ] 
 ```

**How to use it -**

```es6
const sizes= [
        {columns: 2, gutter: 10},
        {mq: '768px', columns: 2, gutter: 35},
        {mq: '1024px', columns: 8, gutter: 60}
    ] 

    return(
            <div>
                <ReactBricks
                .
                .
               sizes = {sizes}
                .
                .
                />
            </div>
        );  
```
### useWindowForScroll
This is `type = boolean` If `true` Scroll listeners are attached to window , in case of `false` it will attach to the components `parentNode`.
By default it is true

###reRender
This is `type = boolean` If `true` reRender will readjust all the bricks in the grid container. This is helpful in case of a window resize 

```es6
.
.
constructor(props) {
    .
    .
     window.onresize = () => {
           this.setState({reRender: true});
        }
        .
        .
}

render(){
    return(
            <div>
                <ReactBricks
                .
                .
               reRender = {this.state.reRender}
                .
                .
                />
            </div>
        );   
}
```
What is happening above is when on a resize we send props reRender as `true` it will repack all the bricks depending on the new window size and the breakpoint mentioned in the `sizes` props above 
### loaderComponent

Your own custom loader component can be passed as props to ReactBricks. By default the loader  is a spinner.

```es6
return(
            <div>
                <ReactBricks
                .
                .
               loaderComponent = {<CustomLoader className="custom-loader"/>}
                .
                .
                />
            </div>
        );      
 ```       

else , you can customize the default Loader using `defaultLoaderStyle`

### defaultLoaderStyle
 
Currently the spinner has by default below properties 

`spinnerSize = 28(in px)`
`duration: 1333 (in ms)`
`color: multicolor (4 colors) `

In case the default spinner properties needs to be changed, it can be done as below 
```es6
 const defaultLoaderStyle = {
            spinnerSize: 64,
            duration: 2000,
            color: "#ff0000"
        }
 return(
            <div>
                <ReactBricks
                .
                .
               defaultLoaderStyle = {defaultLoaderStyle}
                .
                .
                />
            </div>
        );       
```        

###style
Custom inline styles can be passed which would applied to the grid container . By default it is `{}`

```es6
 const style = {
            background: "#000000",
        }
 return(
            <div>
                <ReactBricks
                .
                .
               style = {style}
                .
                .
                />
            </div>
        );       
```      

## License

MIT.
