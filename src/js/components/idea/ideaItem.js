import React from 'react';

const IdeaItem = () => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <h3 className="">Heading</h3>
      <p className="">Description</p>
      <p className="">2016-01-19</p>
      <p className="">0</p>
      <button type="button">Like</button>
      <button type="button">Dislike</button>
    </div>
  );
};

export default IdeaItem;
