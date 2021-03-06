import React from 'react';
import IdeaActions from '../../actions/ideaActions';
import { Link } from 'react-router';

const IdeaItem = (props) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
    <Link to={ `/idea/${props.item.id}` }>
     <h3 className="">{ props.item.heading }</h3>
    </Link>
      <p className="">{ props.item.description }</p>
      <p className="">{ props.item.added }</p>
      <p className="">{ props.item.points }</p>
      <button type="button" onClick={ IdeaActions.increasePoints.bind(null, props.item) }>Like</button>
      <button type="button" onClick={ IdeaActions.decreasePoints.bind(null, props.item) }>Dislike</button>
    </div>
  );
};

IdeaItem.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default IdeaItem;
