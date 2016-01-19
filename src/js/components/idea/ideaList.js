import React from 'react';
import IdeaItem from './ideaItem';

export default class IdeaList extends React.Component {
  render() {
    return (
       <IdeaItem
       heading="Idea Heading"
       desc="Lorem ipsum"
       added="2015-10-10"/>
     );
  }
}
