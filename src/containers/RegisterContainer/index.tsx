import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ValuesType } from "../../utils/types";
import { RegisterContainerWrapper } from "./RegisterContainerWrapper";
import { firebaseAuth, firebaseService } from "../../services/firebaseService";

const RegisterContainer = () => {
  const intialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState<ValuesType>({
    username: "",
    email: "",
    password: "",
  });

  const history = useNavigate();

  const { signUp } = firebaseAuth();
  const { create } = firebaseService("/users");

  //   HandleClick Funtion
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  //   onClick Funtion
  const onclick = (e: any) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    const { password, email, username } = validateForm(formValues);

    if (password || email || username) return;

    signUp({
      email: formValues.email,
      password: formValues.password,
    })
      .then((res) => {
        console.log("resss sccess", res);
        create({
          uid: res.user?.uid,
          name: formValues.username,
          email: res.user?.email,
        }).then((res) => {
          history("/login");
        });
        setFormValues(intialValues);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //   ValidateForm Funtion
  const validateForm = (values: ValuesType) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!!!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 5 characters";
    }

    return errors;
  };

  return (
    <RegisterContainerWrapper className="RegisterContainer">
      <h3>CREATE AN ACCOUNT</h3>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={handleChange}
        />
        {formErrors.username && <p className="errors">{formErrors.username}</p>}
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && <p className="errors">{formErrors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        {formErrors.password && <p className="errors">{formErrors.password}</p>}
      </form>

      <button onClick={onclick}>CREATE</button>
      {/* <div id="footer"> */}
      <p id="agreement">
        Already have an account? Login{" "}
        <b>
          <Link to="/login">here</Link>
        </b>{" "}
      </p>

      {/* </div> */}
    </RegisterContainerWrapper>
  );
};

export default RegisterContainer;
