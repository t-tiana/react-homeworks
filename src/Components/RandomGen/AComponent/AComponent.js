import React from 'react';
import s from './AComponent.module.css';
import BComponent from "./../BComponent";

class AComponent extends React.Component {

    state = {
        count: 0
    }

    setAState = (evt) => {
        this.setState(() => ({
            count: this.state.count + evt,
        }));
        console.log(this.state.count);
    };


    render() {
        return (<div className={s.wrapper}>
                <BComponent setAState={this.setAState} stateBCount={this.state.count}/>
                <h1>{(this.state.count * 1000).toFixed(0)}</h1>
               </div>
        )
    }
}

export default AComponent;
