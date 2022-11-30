const Post = (props) => {
  const { post } = props;

  return (
    <div>
      <div><h3>{post.title}</h3></div>
      <div>{post.description}</div>
      <div>@{post.username}</div>
      <button> &#x1F44D; </button>
      <p>Likes:</p>
    </div>
  )
};

export default Post;