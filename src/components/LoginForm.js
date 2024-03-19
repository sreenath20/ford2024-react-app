
import { useState, useEffect } from "react";

export default function LoginForm() {

    const [inputFields, setInputFields] = useState({
        email: "",
        password: "",
        age: null
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.email.length < 15) {
            errors.email = "Email is too short";
        }
        if (inputValues.password.length < 5) {
            errors.password = "Password is too short";
        }
        if (!inputValues.age || inputValues.age < 18) {
            errors.age = "Minimum age is 18";
        }
        return errors;
    };
    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);
    };

    const finishSubmit = () => {
        console.log(inputFields);
    };

    // useEffect(() => {
    //     if (Object.keys(errors).length === 0 && submitting) {
    //         finishSubmit();
    //     }
    // }, [errors]);

    return (
        <div className="App">
            {Object.keys(errors).length === 0 && submitting ? (
                <span className="success">Successfully submitted ✓</span>
            ) : null}
            <h3>Log In form:</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <p> <label for="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={inputFields.email}
                            onChange={handleChange}
                            style={{ border: errors.email ? "1px solid red" : null }}
                        ></input>

                        {errors.email ? (
                            <p className="alert alert-danger">Email should be at least 15 characters long</p>
                        ) : null}
                    </p>
                    <p>
                        <label for="password">Password</label>

                        <input
                            type="password"
                            name="password"
                            value={inputFields.password}
                            onChange={handleChange}
                            style={{ border: errors.password ? "1px solid red" : null }}
                        ></input>
                        {errors.password ? (
                            <p className="alert alert-danger">
                                Password should be at least 5 characters long
                            </p>
                        ) : null}
                    </p>
                    <p>
                        <label for="age">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={inputFields.age}
                            onChange={handleChange}
                            style={{ border: errors.age ? "1px solid red" : null }}
                        ></input>
                        {errors.age ? <p className="alert alert-danger">Minimum age is 18</p> : null}
                    </p>
                </div>
                <button type="submit">Submit Information</button>
            </form>
        </div>
    );
}
