import React from 'react';
import IdeaForm from './ideaForm';
import IdeaActions from '../../actions/ideaActions';
import Toastr from 'toastr';

class ManageIdea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: {heading: '', description: ''},
      errors: {},
      dirty: false
    };
  }
  setIdeaState(event) {
    this.setState({dirty: true});
    const field = event.target.name;
    const value = event.target.value;
    this.state.idea[field] = value;
    return this.setState({idea: this.state.idea});
  }
  ideaFormIsValid() {
    let formIsValid = true;
    this.state.errors = {}; // clear any previous errors

    if (this.state.idea.heading.length < 3) {
      this.state.errors.heading = 'Heading must be at least 3 characters';
      formIsValid = false;
    }

    if (this.state.idea.description.length < 3) {
      this.state.errors.description = 'Description must be at least 3 characters';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  }
  saveIdea(event) {
    event.preventDefault();
    if (!this.ideaFormIsValid()) {
      return;
    }

    IdeaActions.createIdea(this.state.idea);

    this.setState({dirty: false});
    Toastr.success('Idea saved');
  }
  render() {
    return (
      <IdeaForm
				idea={this.state.idea}
				onChange={this.setIdeaState.bind(this)}
				onSave={this.saveIdea.bind(this)}
				errors={this.state.errors}/>
    );
  }
}

ManageIdea.propTypes = {
  params: React.PropTypes.object
};

export default ManageIdea;
