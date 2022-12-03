import { addDoc, collection } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, db } from '../../config/firebase';

const Post = (props) => {
  const { post } = props;
  const [user] = useAuthState(auth);
  // Creating reference to our 'likes' collection.
  const likesRef = collection(db, 'likes');

  const createLike = async () => {
    await addDoc(likesRef, {
      postId: post.id,
      userId: user?.uid,
    });
  };

  return (
    <div>
      <div>
        <h3>{post.title}</h3>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <p>@{post.username}</p>
        <button onClick={() => { createLike() }}> &#x1F44D; </button>
        <p>Likes:</p>
      </div>
    </div>
  )
};

export default Post;