import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDocs, collection, orderBy, query } from 'firebase/firestore';

import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Post from './post';

import styles from './main.module.css';

const Main = () => {
  // Setting the state for our posts list.
  const [postsList, setPostsList] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    getPostsList();
  }, []);

  // Creating reference to our collection.
  const postsRef = collection(db, 'posts');
  // Here we add sorting (by date of creation) for the order in which posts are displayed on the screen.
  const postsDoc = query(postsRef, orderBy('createdAt', 'asc'));

  const getPostsList = async () => {
    try {
      const result = await getDocs(postsDoc);
      setPostsList(result.docs.map((doc) => ({
        ...doc.data(),
        // Specify each post's ID for future, when we set the unique key for each post. 
        id: doc.id,
      })));
    } catch (err) {
      console.error(`getPostsList(): ${err}`);
    };
  };

  return (
    <div className={styles.container}>
      {user ?
        postsList?.map((post) => {
          return (
            <Post key={post.id} post={post} />
          )
        }) :
        <h1>Dear visitor, please identify yourself here: <Link to='/login'>Login</Link> <br></br> Without that step you can't use our awesome app!</h1>}
    </div>
  )
};

export default Main;