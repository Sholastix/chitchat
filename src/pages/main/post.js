import { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, db } from '../../config/firebase';
import styles from './post.module.css';

const Post = (props) => {
  const { post } = props;

  useEffect(() => {
    getLikes();
  });

  const [likes, setLikes] = useState([]);

  const [user] = useAuthState(auth);
  // Creating reference to our 'likes' collection.
  const likesRef = collection(db, 'likes');
  // Creating a query to database with help of native Firestore method 'where()'.
  // Here we specifying docs which we want to retrieve from database.
  const likesDoc = query(likesRef, where('postId', '==', post.id));

  const getLikes = async () => {
    const result = await getDocs(likesDoc);
    setLikes(result.docs.map((doc) => ({ userId: doc.data().userId })));
  };

  const addLike = async () => {
    await addDoc(likesRef, {
      postId: post.id,
      userId: user?.uid,
    });
  };

  const deleteLike = async () => {
    // Here we querying the targeted like:
    const likeToDeleteQuery = query(likesRef,
      where('postId', '==', post.id),
      where('userId', '==', user.uid),
    );

    // Here we get array of only one element - the targeted 'like' - and getting the data from that specific 'like':
    const likeToDeleteData = await getDocs(likeToDeleteQuery);
    const targetedLike = doc(db, 'likes', likeToDeleteData.docs[0].id)

    // And here we finally deleting the 'like':
    await deleteDoc(targetedLike);
  };

  const isUserLikedThis = likes?.find((like) => {
    return like.userId === user?.uid;
  });

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
        <button onClick={isUserLikedThis ? deleteLike : addLike}> {isUserLikedThis ? <>&#x1F44E;</> : <>&#x1F44D;</>} </button>
        <p>Likes: {likes?.length} </p>
      </div>
    </div>
  )
};

export default Post;