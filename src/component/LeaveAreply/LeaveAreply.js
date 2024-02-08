import React from "react";
import "./LeaveAreply.css";

const LeaveAreply = () => {
  return (
    <div className="leave_a_reply_parent_div">
      <h1 className="leave_a_reply_heading"> Leave A Reply</h1>
      <p>
        Do you have some comments or questions for us? We’d love to hear from
        you! Don’t be shy! Feel free to drop us a message!{" "}
      </p>
      <div>
        <textarea
          className="textarea"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <div className="leave_a_reply_input_flex_div">
          <input
            className="leave_a_reply_input"
            type="email"
            placeholder="Email"
          />
          <input
            className="leave_a_reply_input"
            type="name"
            placeholder="Name"
          />
        </div>
        <button className="send"> SEND</button>
      </div>
    </div>
  );
};

export default LeaveAreply;
