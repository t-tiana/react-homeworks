import React from 'react';
import s from './RandomGen.module.css';
import AComponent from './AComponent';

const RandomGen = () => {
  return (
    <div className={s.wrapper}>
      <AComponent />
    </div>
  );
};

// class RandomGen extends React.Component {
//
//     render() {
//
//         return (
//             <div className={s.wrapper}>
//                 <AComponent  />
//             </div>
//         );
//     }
// }

export default RandomGen;
