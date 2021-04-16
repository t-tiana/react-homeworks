import s from './Output.module.css';

const Output = props => {
  return (
    <h1 className={s.h1}>
      {props.input !== '' ? props.input : 'Hi, Yulian! ✨'}
    </h1>
  );
};

export default Output;
