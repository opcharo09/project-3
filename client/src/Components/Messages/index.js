import React from "react";

export default class Messages extends React.Component {
    render() {
      return (
        <div class="empty">
        <div class="empty-icon">
        <i class="icon icon-2x icon-mail"></i>
        </div>
        <p class="mail">You have no new messages! ok?</p>
        
        <div class="empty-action">
          <ul>
         <il> <button class="btn btn-primary">Delete</button></il>
          <il><button class="btn btn-primary">Return</button></il>
          </ul>
        </div>
      </div>
      );
    }
  }