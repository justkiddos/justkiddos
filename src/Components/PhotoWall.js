//commented out since component extension is not use anymore since the class is converted to functional component
//import React, {Component} from 'react'
import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import{Link} from 'react-router-dom'

//functional component
function PhotoWall(props) {
return <div>
            {/*react router: link */}
            <Link className="add-icon"  to="/AddPhoto"> </Link>
            <div className="photo-grid" >
                 {props.posts
                 .sort(function(x,y){
                    //descending order
                     return y.id - x.id

                     //ascending order
                    //return x.id - y.id
                 })
                 .map((post, index) => <Photo key = {index} post = {post} {...props} index={index}/>)}
            </div>
        </div>
            
           
}

//state management: prop-types
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}

//converted this to functional component
/*class PhotoWall extends Component{
    render() {
        return <div className="photo-grid" >
                 {this.props.posts.map((post, index) => <Photo key = {index} post = {post}/>)}
            </div>
    }
}*/

export default PhotoWall