import React, { useState } from 'react'
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const newUser = {
                firstName: firstname,
                lastName: lastname,
                email: email,
                password: password
            }
            const user = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/users/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
                credentials: "include"
            })
            const data = await user.json();

            if (data.success) {
                navigate("/");
                setFirstname("");
                setLastname("");
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="text-5xl font-bold text-center text-black mb-2 tracking-tight">SMOKEWEARS</h2>
                    <p className="text-center text-gray-600 text-sm mt-6">Create your account</p>
                </div>

                <form className="mt-8 space-y-5">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-black transition"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-black transition"
                                required
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-black transition"
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-black transition"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full py-3 px-4 bg-black hover:bg-gray-800 text-white font-medium tracking-wide transition cursor-pointer mt-6"
                    >
                        Create Account
                    </button>

                    <p className="text-center text-gray-600 text-sm mt-4">
                        Already have an account?
                        {/* <a href="/login" className="text-black hover:text-gray-700 ml-1 font-medium underline">Sign In</a> */}
                        <Link to="/login" className="text-black hover:text-gray-700 ml-1 font-medium underline">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup
