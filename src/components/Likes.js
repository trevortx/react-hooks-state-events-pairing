import {useState} from "react"

function Likes( {video} ) {
  const [displayComments, setDisplayComments] = useState("Hide Comments")

  const commentHandler = () => {
    console.log("test")
    setDisplayComments(!displayComments)
  }

  return( 
    <div>
        <button id="upvotes">{video.upvotes} 👍</button>
        <button id="downvotes">{video.downvotes} 👎</button>
        <br></br>
        <button id="comments" onClick={commentHandler}>{displayComments ? "Hide Comments" : "Show Comments"}</button>
    </div>
  )
}

export default Likes