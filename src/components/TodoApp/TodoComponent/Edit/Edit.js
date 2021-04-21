import React, { Component } from 'react';
import actions from '../../../../redux/actions';
import { connect } from 'react-redux';
import './Edit.scss';
import { GrSave } from 'react-icons/gr';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  handleInputChange = event => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    const { id, saveEdit, handleEdit } = this.props;
    const { text } = this.state;
    return (
      <>
        <textarea
          className="editInput"
          value={text}
          onChange={this.handleInputChange}
          id={id}
        />
        <div className="saveChangesButton">
          <button
            type="button"
            className="saveEdit"
            onClick={() => saveEdit(id, text)}
          >
            <GrSave className="saveEditIcon" />
          </button>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveEdit: (id, text) => dispatch(actions.saveEdit(id, text)),
});

export default connect(null, mapDispatchToProps)(Edit);
