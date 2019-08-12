import React from "react";

export default class Messages extends React.Component {
    render() {
      return (
        <div class="empty">
        <div class="empty-icon">
          <i class="icon icon-people"></i>
        </div>
        <p class="empty-title h5">You have no new messages</p>
        
        <div class="empty-action">
          <button class="btn btn-primary">Reply</button>
        </div>
      </div>
      );
    }
  }