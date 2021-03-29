import React from 'react';
import s from './Input.module.css';
import Output from './Output';

class Input extends React.Component {
  state = {
    text: '',
  };

  handleInputChange = event => {
    const saveValue = event.target.value;
    this.setState({
      text: saveValue,
    });
  };

  render() {
    return (
      <div className={s.wrapper}>
        <input
          className={s.input}
          placeholder={'type in some text'}
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <Output input={this.state.text} />
      </div>
    );
  }
}

export default Input;
