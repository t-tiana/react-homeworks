import React from 'react';
import s from './CComponent.module.css';

class CComponent extends React.Component {
    // state = {
    //     count: this.props.stateCCount
    // }

    // //сорі, було дуже цікаво як можна оновлювати стейт за оновленням пропсів і це цілу ніч не давало мені спокою,
    // // тому залізла трохи впреред у методи життєвого циклу)
    //
    // static getDerivedStateFromProps(props, state) {
    //     if (props.stateCCount !== state.count) {
    //         return {count: props.stateCCount}
    //     }
    // }

    render() {
        return (<button onClick={(evt) => {
                this.props.setAState(Math.random())
            }}>Generate</button>
        )
    }
}

export default CComponent;