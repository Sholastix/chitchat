import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDocs, collection, orderBy, query } from 'firebase/firestore';

import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Post from './post';

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
      const date = new Date();
      console.log(`UNATHORIZED ACCESS!: ${date.toUTCString()}`);
    };
  };

  return (
    <div>
      {user ?
        postsList?.map((post) => {
          return (
            <Post key={post.id} post={post} />
          )
        }) :
        <p>Dear visitor, please identify yourself here <Link to='/login'>Login</Link> <br></br> Without that step you can't use our awesome app!</p>}
    </div>
  )
};

export default Main;