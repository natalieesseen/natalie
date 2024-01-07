import React from 'react'
import styles from '../page.module.css';
import { getPostData } from '@/utils/content';

const Page = () => {
  const { content, data } = getPostData('freelance');

  return (
    <div className={styles.content}>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Page;
