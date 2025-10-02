import React, { useState } from 'react'
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const newUser = {
                email: email,
                password: password
            }
            const user = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
                credentials: "include"
            })
            const data = await user.json();

            if (data.success) {
                navigate("/");
                // alert("User login Successfully");
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold tracking-wider mb-2">SMOKEWEARS</h1>
                    <p className="text-gray-600 text-sm">Sign in to your account</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full bg-black text-white py-3 font-semibold tracking-wide hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        SIGN IN
                    </button>

                    <p className="text-center text-gray-600 text-sm mt-4">
                        Don't have an account?
                        {/* <a href="/login" className="text-black hover:text-gray-700 ml-1 font-medium underline">Sign In</a> */}
                        <Link to="/signup" className="text-black hover:text-gray-700 ml-1 font-medium underline">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
