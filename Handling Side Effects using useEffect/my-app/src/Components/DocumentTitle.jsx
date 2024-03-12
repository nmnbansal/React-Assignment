import React, { useEffect } from 'react';

const DocumentTitle = ({ title }) => {

  useEffect(() => {
    document.title = title;
    return () => {
      document.title = 'React App'; 
    };
  }, [title]); 

  return (
    <div>
      <h1>Document Title</h1>
      <p>The document title will be updated based on the provided title prop.</p>
    </div>
  );
};

export default DocumentTitle;
