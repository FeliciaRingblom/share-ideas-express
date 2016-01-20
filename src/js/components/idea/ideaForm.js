import React from 'react';
import TextInput from '../common/textInput';

class IdeaForm extends React.Component {
	render() {
  return (
			<form>
				<TextInput
          name="heading"
					label="Idea heading"
					value={this.props.idea.heading}
					onChange={this.props.onChange}
					error={this.props.errors.heading} />

				<TextInput
          name="description"
					label="Idea description"
					value={this.props.idea.description}
					onChange={this.props.onChange}
					error={this.props.errors.description} />

				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>

			</form>
		);
	}
}

IdeaForm.propTypes = {
  idea: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object
};

export default IdeaForm;
