//commented out since component extension is not use anymore since the class is converted to functional component
//import React, {Component} from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
//do this when you want to access deeply nested components
//import {connect} from 'react-redux'

//functional component
function Photo(props) {
    //console.log(props.posts)
    const post = props.post
        return <figure className="figure"> 
                    <Link to={`/single/${post.id}`}> <img className="photo" src={post.imageLink} alt={post.description} /></Link>  
                    <figcaption> <p> {post.description} </p> </figcaption> 
                    <div className="button-container"> <button onClick = {() => {
                        props.startRemovingPosts(props.index, post.id)
                        props.history.push('/')
                    }}> Remove </button> 
                    <Link className="button" to={`/single/${post.id}`}> 
                        <div className="comment-count">
                            <div className="speech-bubble"> </div>
                            {props.comments[post.id] ? props.comments[post.id].length : 0}
                        </div>
                    </Link>
                    </div>
                </figure>
}

//do this when you want to access deeply nested components
// function mapStateToProps(state) {
//     return {
//         posts: state
//     }
// }

//state management: prop-types
Photo.propTypes = {
    post: PropTypes.object.isRequired
}

//converted to functional component
/*class Photo extends Component{
    render() {
        const post = this.props.post
        return <figure className="figure">  
                    <img className="photo" src={post.imageLink} alt={post.description} />
                    <figcaption> <p> {post.description} </p> </figcaption> 
                    <div className="button-container"> <button className="remove-button"> Remove </button> </div>
                    </figure>
    }
}*/

//do this when you want to access deeply nested components
// export default connect(mapStateToProps)(Photo)

export default Photo