import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

import { db } from '../../config/firebase';
import Post from './post';

const Main = () => {
  // Setting the state for our posts list.
  const [postsList, setPostsList] = useState(null);
  // Creating reference to our collection.
  const postsRef = collection(db, 'posts');

  useEffect(() => {
    getPostsList();
  }, []);

  const getPostsList = async () => {
    const result = await getDocs(postsRef);
    setPostsList(result.docs.map((doc) => ({
      ...doc.data(),
      // Specify each post's ID for future, when we set the unique key for each post. 
      id: doc.id,
    })));
  };

  return (
    <div>
      {postsList?.map((post) => {
        return (
          <Post key={post.id} post={post}/>
        )
      })}
    </div>
  )
};

export default Main;