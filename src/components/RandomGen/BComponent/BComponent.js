import React from 'react';
import CComponent from '../CComponent';

class BComponent extends React.Component {
  // state = {
  //     count: this.props.stateBCount
  // }

  // //сорі, було дуже цікаво як можна оновлювати стейт за оновленням пропсів і це цілу ніч не давало мені спокою,
  // // тому залізла трохи впреред у методи життєвого циклу)
  //
  // componentDidUpdate(prevProps) {
  //
  //     if (this.props.stateBCount !== prevProps.stateBCount) {
  //         this.setState ({
  //             count: this.props.stateBCount,
  //         })
  //         console.log(this.state.count);
  //     }
  // }

  render() {
    return (
      <CComponent
        setAState={this.props.setAState}
        stateCCount={this.props.stateBCount}
      />
    );
  }
}

export default BComponent;
