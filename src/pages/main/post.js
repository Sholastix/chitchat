import { useEffect, useState } from 'react';
import { addDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, db } from '../../config/firebase';

const Post = (props) => {
  const { post } = props;

  useEffect(() => {
    getLikes();
  }, []);

  const [likes, setLikes] = useState(null);

  const [user] = useAuthState(auth);
  // Creating reference to our 'likes' collection.
  const likesRef = collection(db, 'likes');
  // Creating a query to database with help of native Firestore method 'where()'.
  // Here we specifying for docs which we want to retrieve from database.
  const likesDoc = query(likesRef, where('postId', '==', post.id))

  const getLikes = async () => {
    const result = await getDocs(likesDoc);
    setLikes(result.docs.length);
  };

  const createLike = async () => {
    await addDoc(likesRef, {
      postId: post.id,
      userId: user?.uid,
    });

    setLikes(likes + 1);
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
        {likes && <p>Likes: {likes}</p>}
      </div>
    </div>
  )
};

export default Post;