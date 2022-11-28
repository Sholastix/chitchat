import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// With help of this tool we combine 'react-hook-form' and 'yup'.
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './post-create-form.module.css';

const PostCreateForm = () => {
  // Create the validation schema for our posts with help of 'yup'.
  const schema = yup.object().shape({
    title: yup.string().max(30).required('Please add the title!'),
    description: yup.string().max(300).required('Please add the description!'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onPostCreate = (data) => {
    console.log(data)
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