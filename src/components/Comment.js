import React, { PureComponent } from "react";
import { useState, useRef } from "react";




const Comment = ({ comments, id, myRef }) => {
  console.log(comments[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  function getHowManyDaysAgo(date) {
    let today = new Date();
    let createdOn = new Date(date);
    let msInDay = 24 * 60 * 60 * 1000;

    createdOn.setHours(0,0,0,0);
    today.setHours(0,0,0,0)

    let diff = (+today - +createdOn)/msInDay
    return diff;
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        `https://3l41sc9lla.execute-api.ap-south-1.amazonaws.com/production/blog/${id}/comment`,
        {     
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            comment: comment,
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 201) {
        setName("");
        setEmail("");
        setComment("");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="comments-wrapper" ref={myRef}>
       <form className="comment-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          
        </label>
        <input
            id="name"
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

        <label htmlFor="email">
          Email:
          
        </label>

        <input
            id="email"
            type="email"
            name="email"
            required
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

        <textarea
          type="text"
          name="comment"
          value={comment}
          placeholder="Type comment here"
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="comment-container">
        <div className="left">
          <img src="/images/comments.png"/>
        </div>
         
         <div className="right">
            <h3>Comments:</h3>
              {comments.map((a) => (
                
                  <div className="comment">
                    <div className="img-cont">
                      <div className="img">
                        <img src='/images/avatar.jpg'/>
                      </div>
                    </div>
                    <div className="text-cont">
                      <p className="commentor-name">{a.name}</p>
                      <p className="comment-days">{getHowManyDaysAgo(new Date(a.date)) == 0? 'Today':  getHowManyDaysAgo(new Date(a.date)) + " days ago"} </p>
                      <p className="comment-text">{a.comment}</p>
                    </div>
                  </div>
          ))}
         </div>
      </div>
    </div>
  );
};

export default Comment;
