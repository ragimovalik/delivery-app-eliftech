import styles from './InputComponent.module.css';

const InputComponent = ({ labelText, name, onChange, ...rest }) => {
  return (
    <div className={styles.input__box}>
      <label htmlFor={name}>{labelText}</label>
      <input onChange={onChange} name={name} {...rest} />
    </div>
  );
};

export default InputComponent;
