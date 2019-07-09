//commented out since component extension is not use anymore since the class is converted to functional component
//import React, {Component} from 'react'
import React from 'react'

//functional component
function Title(props) {
        return <h1> {props.title} </h1>
}

//converted to functional component
/*class Title extends Component {
    render(){
        return <h1> {this.props.title} </h1>
    }
}*/

export default Title