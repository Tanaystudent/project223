import React, { useState } from 'react';
import './QuestionForm.css';

function QuestionForm() {
  const [title, setTitle] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [tags, setTags] = useState('');

  return (
    <div className='question-form'>
      <h2>What do you want to ask?</h2>
      <label htmlFor="Title">Title</label>
      <input
        type="text"
        placeholder="Start your question with how, what, why, etc."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="Problem">Describe your problem</label>
      <textarea
        value={problemDescription}
        onChange={(e) => setProblemDescription(e.target.value)}
        rows={13} // Adjust the number of rows as needed
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

export default QuestionForm;

