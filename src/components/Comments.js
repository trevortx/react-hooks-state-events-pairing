function Comments( {user, comment, displayComments} ) {
  if (displayComments) return(
    <div>
      <p><strong>{user}</strong></p>
      <p>{comment}</p>
    </div>
  ); else return null
}

export default Comments