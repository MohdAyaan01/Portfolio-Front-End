'use client'
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { GoogleLogin } from '@react-oauth/google';
import { toast } from "react-hot-toast";
export default function SignUpPage() {

    const router = useRouter();

    type FormData = {
        name: string,
        email: string,
        password: string,
    }

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
      
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submithandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/user/signup`, formData, {
                headers: {
                    'Content-Type': "application/json"
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message || 'Account created!');
                router.push("/Onboarding");
            }

        } catch (error: any) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Sign up failed. Please try again.')
        }
    }

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                .auth-page * { font-family: 'Inter', sans-serif; }
                .auth-input::placeholder { color: #6b7280; }
                .auth-input:focus { outline: none; }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .auth-card { animation: fadeUp 0.5s ease both; }
                .social-btn {
                    display: flex; align-items: center; justify-content: center;
                    border-radius: 9999px;
                    border: 1px solid rgba(255,255,255,0.12);
                    background: rgba(255,255,255,0.05);
                    padding: 10px 0;
                    cursor: pointer;
                    transition: background 0.2s, border-color 0.2s;
                }
                .social-btn:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.25); }
                .field-wrap {
                    display: flex; align-items: center; gap: 10px;
                    height: 48px; width: 100%;
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 9999px;
                    background: rgba(255,255,255,0.04);
                    padding-left: 20px;
                    transition: border-color 0.2s;
                }
                .field-wrap:focus-within { border-color: #14b8a6; }
                .divider-line { flex: 1; height: 1px; background: rgba(255,255,255,0.1); }
            `}</style>

            <div className="auth-page min-h-screen bg-[#0C0414] flex items-center justify-center px-4 py-10">

                <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-[#D043FF] blur-[90px] opacity-25 z-0" />

                <div className="auth-card relative z-10 w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl px-8 py-10 shadow-2xl">

                    <div className="mb-8 text-center">
                        <img src="/MyLogo.jpeg" alt="Logo" className="w-14 h-14 rounded-xl object-cover mx-auto mb-4" />
                        <h1 className="text-3xl font-semibold text-white">Create account</h1>
                        <p className="mt-2 text-sm text-gray-400">Join us today — it&apos;s free to get started.</p>
                    </div>

                    <div className="w-full flex justify-center mb-6">
                        <GoogleLogin
                            theme="outline"
                            size="large"
                            text="signup_with"
                            width="250"
                            onSuccess={async (credentialResponse) => {
                                try {
                                    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/user/google`, {
                                        token: credentialResponse.credential
                                    }, { withCredentials: true });
                                    if (res.data.success) {
                                        toast.success('Google Login successful!');
                                        router.push("/Onboarding");
                                    }
                                } catch (error: any) {
                                    toast.error(error.response?.data?.message || 'Google Login failed.');
                                }
                            }}
                            onError={() => toast.error('Google Login Failed')}
                        />
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="divider-line" />
                        <span className="text-xs text-gray-500 whitespace-nowrap">or sign up with email</span>
                        <span className="divider-line" />
                    </div>


                    <form onSubmit={submithandler} className="flex flex-col gap-4">

                        <div className="field-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                            </svg>
                            <input
                                name="name"
                                type="text"
                                placeholder="Full name"
                                value={formData.name}
                                onChange={handleChange}
                                className="auth-input h-full w-full bg-transparent text-sm text-white"
                                required
                            />
                        </div>

                        <div className="field-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />
                            </svg>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                                className="auth-input h-full w-full bg-transparent text-sm text-white"
                                required
                            />
                        </div>
                        <div className="field-wrap">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="auth-input h-full w-full bg-transparent text-sm text-white"
                                required
                            />
                        </div>

                        <p className="text-xs text-gray-500 text-center px-2">
                            By signing up, you agree to our{" "}
                            <a href="#" className="text-teal-400 hover:text-teal-300 underline transition">Terms</a>
                            {" "}and{" "}
                            <a href="#" className="text-teal-400 hover:text-teal-300 underline transition">Privacy Policy</a>.
                        </p>


                        <button
                            type="submit"
                            className="mt-1 h-11 w-full cursor-pointer rounded-full bg-teal-500 hover:bg-teal-400 shadow-[0px_0px_20px_6px_rgba(20,184,166,0.35)] hover:shadow-[0px_0px_28px_10px_rgba(20,184,166,0.5)] text-white text-sm font-semibold transition duration-300"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link href="/Login" className="text-teal-400 hover:text-teal-300 underline transition">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}