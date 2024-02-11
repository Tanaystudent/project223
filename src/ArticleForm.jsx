import React, { useState } from 'react';
import './ArticleForm.css';

function ArticleForm() {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [articletext, setArticletext] = useState('');
  const [tags, setTags] = useState('');

  return (
    <div className="article-form">
      <h2>What do you want to share?</h2>
      <label htmlFor="Title">Title</label>
      <input
        type="text"
        placeholder="Enter a descriptive title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="Abstract">Abstract</label>
      <textarea
        value={abstract}
        onChange={(e) => setAbstract(e.target.value)}
        rows={3} 
      />
       <label htmlFor="Article Text">Article Text</label>
      <textarea
        value={articletext}
        onChange={(e) => setArticletext(e.target.value)}
        rows={7} 
      />
      <label htmlFor="Tags">Tags</label>
      <input
        type="text"
        placeholder="Please add up to 3 tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button>Post</button>
    </div>
  );
}

export default ArticleForm;
