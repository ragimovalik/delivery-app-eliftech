import InputComponent from '../InputComponent';

import styles from './InputBox.module.css';

const InputBox = ({ onChange }) => {
  return (
    <div className={styles.form}>
      <InputComponent
        name="name"
        placeholder="Your Name"
        type="text"
        labelText="Name"
        onChange={onChange}
        required
      />
      <InputComponent
        name="email"
        placeholder="Your Email"
        type="email"
        labelText="Email"
        onChange={onChange}
        required
      />
      <InputComponent
        name="phone"
        placeholder="Your Phone number"
        type="tel"
        labelText="Phone"
        onChange={onChange}
        required
      />
      <InputComponent
        name="address"
        placeholder="Your Address"
        type="text"
        labelText="Address"
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputBox;
