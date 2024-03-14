import { useState } from "react";

function FormDemo() {

    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    let [isAdmin, setIsAdmin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(password);
        console.log(isAdmin);
    };
    return (
        <>
            <h3>User Login Form</h3>
            <form onSubmit={handleSubmit}>
                User Type:
                <select value={isAdmin} onChange={e => setIsAdmin(e.target.value)}>
                    <option value="true">Admin</option>
                    <option value="false">User</option>
                </select>
                <br />
                User Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
                <br />
                User Password:
                <input type="text" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
export default FormDemo;