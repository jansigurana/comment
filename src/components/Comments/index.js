import {Component} from 'react'
import {v4} from 'uuid'
import ComponentItem from '../CommentItem'
import './index.css'
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    nameInput: '',
    CommentInput: '',
    CommentsList: [],
  }
  deleteComment = CommentId => {
    const {CommentsList} = this.state
    this.setState({
      CommentsList: CommentsList.filter(Comment => Comment.id !=== CommentId),
    })
  }
  toggleIsLiked = id => {
    this.setState(prevState => ({
      CommentsList: prevState.CommentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }
  renderCommentList = () => {
    const {CommentsList} = this.state
    return CommentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails = {eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }
  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialContainerBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
      Math.ceil(
        Math.random() * initialContainerBackgroundClassNames.length - 1,
      )
    ]
  }`
  const newComment = {
     id: v4(),
     name: nameInput,
     Comment: commentInput,
     date: new Date(),
     isLiked: false,
     initialClassName: initialBackgroundColorClassName,
  }
  this.setState(prevState => ({
    CommentsList: [...prevState.commentsList, newComment],
    nameInput: '',
    commentInput: '',
  }))
}
onChangeCommentInput = event => {
  this.setState({
    commentInput: event.target.value,
  })
}
onChangeNameInput =  event => {
  this.setState({
    nameInput: event.target.value,
  })
}
render(){
  const {nameInput, CommentInput, CommentsList} = this.state 

  return (
    <div className="app-container">
      <div className="comments-container">
        <h1 className="app-heading">Comments</h1>
        <div className="Comments-inputs">
          <form className="form" onSubmit={this.onAddComment}>
            <p className="form-description">
               Say something about 4.0 Technologies
            </p>
            <input 
              type="text"
              className="name-input"
              placeholder="your Name"
              value={nameInput}
              onChange={this.onChangeNameInput}
            />
            <textarea
             placeholder="your Comment"
             className="Comment-input"
             value={commentInput}
             onChange={this.onChangeCommentInput}
             row1="6"
            />
            <button type="submit" className="add-button">
              Add Comment
            </button>
          </form>
           <img 
             className="image"
             src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
             alt="comments"
             />
        </div>
         <hr className="line" />
         <p className="heading">
           <span className="comments-count">{commentsList.length}</span>
           Comments
         </p>
         <ul className="comments-list">{this.renderCommentsList()}</ul>
      </div>
    </div>
  )
}
}
export default Comments