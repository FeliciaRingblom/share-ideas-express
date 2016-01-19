import React from 'react';

class IdeaItem extends React.Component {
  render() {
    return (
      <div className="idea-container col-sm-6 col-md-4 col-lg-3">
        <h3 className="idea-heading">{this.props.heading}</h3>
        <p className="idea-desc">{this.props.description}</p>
        <p className="idea-added-date">{this.props.added}</p>
        <button type="button">Like</button>
        <button type="button">Dislike</button>
      </div>
    );
  }
}

IdeaItem.propTypes = {
  heading: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  added: React.PropTypes.string.isRequired,
};

export default IdeaItem;
