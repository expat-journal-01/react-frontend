import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
  password: yup.string().min(6, "Password must be 6 characters long"),
});

export default function Form() {
  const { push } = useHistory();
  // state for whether our button should be disabled or not.
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // managing state for our form inputs
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  // state for our errors
  const [errors, setErrors] = useState({
    username: "",
    password: "",

  });

  // new state to set our post request too. So we can console.log and see it.
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   formSchema.isValid(formState).then(valid => {
  //     setButtonDisabled(!valid);
  //   });
  // }, [formState]);

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post("http://backend-expat-journal.herokuapp.com/api/auth/login", { username: formState.username, password: formState.password })
      .then(res => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        push(`/`);
        // reset form if successful
        //TODO: ADD RESPONSE HANDLER
      })
      .catch(err => console.log(err.response));
  };

  const inputChange = e => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };

    ;
    setFormState(newFormData);
  };

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="username">
        <h3>Username</h3>
        <input
          type="text"
          name="username"
          value={formState.username}
          onChange={inputChange}
        />
        {errors.username.length > 0 ? <p className="error">{errors.username}</p> : null}
      </label>

      <label htmlFor="password">
        <h3>Password</h3>
        <input
          name="password"
          value={formState.password}
          onChange={inputChange}
        />
        {errors.password.length > 0 ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </label>


      {/* displaying our post request data */}
      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
      <button type="button">Create Account</button>
      <p></p>
      <button type="submit">Login</button>
      <p></p>


    </form>
  );
}
