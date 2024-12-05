import { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
            if (res.success) {
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
        <div className="login">
            <div className="lContainer">
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
                {notsuccess && <span>{"Try again"}</span>}
            </div>
        </div>
    );
};

export default Login;
