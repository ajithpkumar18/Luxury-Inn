import { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentals] = useState({
        username: undefined,
        email: undefined,
        password: undefined,
    });

    const [notsuccess, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentals((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await axios.post("https://luxury-inn.onrender.com/api/auth/register", credentials);
            console.log(res);
            console.log(res.data.succes);
            // console.log(res);

            if (res.data.succes) {
                navigate("/login");
            }
            else {
                setSuccess(e => !e);
            }
        } catch (err) {
            console.log(err);

        }
        setLoading(false)
    };

    return (
        <div className="register">
            <div className="rContainer">
                <h1 className="h">Register</h1>
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    name="username"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                />
                <button disabled={loading} onClick={handleClick} className="lButton">
                    Register
                </button>
                <Link to={"/login"} className="alreadyReg">Already Registered ?</Link>
                {notsuccess && <span>{"Try again"}</span>}
            </div>
        </div>
    );
};

export default Login;
