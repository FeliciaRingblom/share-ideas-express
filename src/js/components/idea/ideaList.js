import React from 'react';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import IdeaItem from './ideaItem';
import IdeaStore from '../../stores/ideaStore';

const getIdeas = () => {
  return { ideas: IdeaStore.getIdeas() };
};

const IdeaList = (props) => {
  const ideaItems = props.ideas.map( item => {
    return <IdeaItem key={ item.id } item={ item } />;
  });
  return (
    <div className="row">
      { ideaItems }
    </div>
  );
};

IdeaList.propTypes = {
  ideas: React.PropTypes.array.isRequired,
};

export default StoreWatchMixin(IdeaList, getIdeas);
