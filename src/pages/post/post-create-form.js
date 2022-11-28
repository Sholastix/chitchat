import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// With help of this tool we combine 'react-hook-form' and 'yup'.
import { yupResolver } from '@hookform/resolvers/yup';
// Import from Firebase methods for setting data in Firestore database.
import { addDoc, collection } from 'firebase/firestore';
// Import database which we created and planning to use.
import { auth, db } from '../../config/firebase';
// Hook for authomatic re-login with new account (this time only to get username).
import { useAuthState } from 'react-firebase-hooks/auth';

import styles from './post-create-form.module.css';

const PostCreateForm = () => {
  const [user] = useAuthState(auth);

  // Create the validation schema for our posts with help of 'yup'.
  const schema = yup.object().shape({
    description: yup.string().max(300).required('Please add the description!'),
    title: yup.string().max(30).required('Please add the title!'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  // Creating reference to our collection.
  const postsRef = collection(db, 'posts');

  const onPostCreate = async (data) => {
    await addDoc(postsRef, {
      description: data.description,
      id: user?.uid,
      title: data.title,
      username: user?.displayName,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onPostCreate)}>
      <p>{errors.title?.message}</p>
      <input placeholder='Add the title here...' {...register('title')} />
      <p>{errors.description?.message}</p>
      <textarea placeholder='Add the description here...' {...register('description')} />
      <input type='submit' />
    </form>
  )
};

export default PostCreateForm;