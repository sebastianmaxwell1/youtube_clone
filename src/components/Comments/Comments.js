import React from 'react';
import {CommentsHeader} from "./CommentsHeader/CommentsHeader";

export class Comments extends React.Component {
  render() {
    return(
      <div>
        <CommentsHeader amountComments={this.props.amountComments}/>
      </div>
    );
  }
}
export default Comments;