import React from 'react';
import ReactDOM from 'react';
class CommentBox extends React.Component {
  constructor() {
    super();
    
    this.state = {
      showComments: false,
      comments: [
        {id: 1,  body: "Write your comment here."},
        
      ]
    };
  }
  
  render () {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show Comments';
    
    if (this.state.showComments) {
      buttonText = 'Hide Comments';
      commentNodes = <div className="comment-list">{comments}</div>;
    }
    
    return(
      <div className="comment-box">
        <h2>Join the Discussion!</h2>
        <CommentForm addComment={this._addComment.bind(this)}/>
        <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
          {buttonText}
        </button>
        <h3>Comments</h3>
        <h4 className="comment-count">
          {this._getCommentsTitle(comments.length)}
        </h4>
        {commentNodes}
      </div>  
    );
  } // end render
  
  _addComment(body) {
    const comment = {
      id: this.state.comments.length + 1,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment]) }); 
  }
  
  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }
  
  _getComments() {    
    return this.state.comments.map((comment) => { 
      return (
        <Comment 
          body={comment.body} 
          key={comment.id} />
      ); 
    });
  }
  
  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }

class CommentForm extends React.Component {
  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="comment-form-fields">
          <input placeholder="Name" required ref={(input) => this._author = input}></input><br />
          <textarea placeholder="Comment" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post Comment</button>
        </div>
      </form>
    );
  } 
  
  _handleSubmit(event) { 
    event.preventDefault();   
    let body = this._body;
    this.props.addComment(body.value);
  }
} 

class Comment extends React.Component {
  render () {
    return(
      <div className="comment">
        <p className="comment-body">- {this.props.body}</p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete" onClick={this._deleteComment}>Delete Comment</a>
        </div>
      </div>
    );
  }

ReactDOM;render(<CommentBox />, document.getElementById('main'));
