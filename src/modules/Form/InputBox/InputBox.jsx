import InputComponent from '../InputComponent';

import styles from './InputBox.module.css';

const InputBox = () => {
  return (
    <div className={styles.form}>
      <InputComponent
        name="Name"
        placeholder="Your Name"
        type="text"
        labelText="Name"
        onChange={() => {
          console.log('clicked');
        }}
      />
      <InputComponent
        name="Email"
        placeholder="Your Email"
        type="email"
        labelText="Email"
        onChange={() => {
          console.log('clicked');
        }}
      />
      <InputComponent
        name="Phone"
        placeholder="Your Phone number"
        type="tel"
        labelText="Phone"
        onChange={() => {
          console.log('clicked');
        }}
      />
      <InputComponent
        name="Address"
        placeholder="Your Address"
        type="text"
        labelText="Address"
        onChange={() => {
          console.log('clicked');
        }}
      />
    </div>
  );
};

export default InputBox;
