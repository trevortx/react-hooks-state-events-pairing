import {useState} from "react"
import Comments from "./Comments.js"

function Info( {video} ) {
  const [displayComments, setDisplayComments] = useState("Hide Comments")
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)

  const commentHandler = () => {
    console.log("test")
    setDisplayComments(!displayComments)
  }

  const upvoteHandler = () => {
    setUpvotes(upvotes + 1)
  }

  const downvoteHandler = () => {
    setDownvotes(downvotes + 1)
  }

  return(
    <div>
      <h2>{video.title}</h2>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button id="upvotes" onClick={upvoteHandler}>{upvotes} 👍</button>
      <button id="downvotes" onClick={downvoteHandler}>{downvotes} 👎</button>
      <br></br><br></br>
      <button id="showOrHideComments" onClick={commentHandler}>{displayComments ? "Hide Comments" : "Show Comments"}</button>
      <hr></hr>

      <h3>{video.comments.length} Comments</h3>
      {video.comments.map((comment) => (
        <Comments user={comment.user} comment={comment.comment} displayComments={displayComments}/>
      ))}
    </div>
  )
}

export default Info