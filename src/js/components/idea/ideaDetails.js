import React from 'react';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import IdeaActions from '../../actions/ideaActions';
import IdeaStore from '../../stores/ideaStore';

function getIdeaItem( props ) {
  const item = IdeaStore.getIdeas().find( ({ id }) => id === props.params.idea );
  return {item};
}

const IdeaItem = (props) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <h3 className="">{ props.item.heading }</h3>
      <p className="">{ props.item.description }</p>
      <p className="">{ props.item.added }</p>
      <p className="">{ props.item.points }</p>
      <button type="button" onClick={ IdeaActions.increasePoints.bind(null, props.item) }>Like</button>
      <button type="button" onClick={ IdeaActions.decreasePoints.bind(null, props.item) }>Dislike</button>
      <ul className="idea-tag-list">
        <li>Tech</li>
        <li>App</li>
      </ul>
    </div>
  );
};

IdeaItem.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default StoreWatchMixin( IdeaItem, getIdeaItem );