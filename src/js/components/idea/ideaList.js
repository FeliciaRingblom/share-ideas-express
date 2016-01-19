import React from 'react';
import IdeaItem from './ideaItem';
import IdeaStore from '../../stores/ideaStore';

function getIdeas() {
  return { ideas: IdeaStore.getIdeas() };
}

export default class IdeaList extends React.Component {
  constructor() {
    super();
    this.state = getIdeas();
  }
  render() {
    const ideaItems = this.state.ideas.map( item => {
      return (<IdeaItem
        key={ item.id }
        heading={ item.heading }
        description={ item.description }
        added={ item.added }
        />);
    });
    return (
      <div className="row">
        { ideaItems }
      </div>
    );
  }
}

export default IdeaList;
