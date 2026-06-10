"use client";

import axios from "axios";
import { toast } from "react-hot-toast";

interface PaymentButtonProps {
    className?: string;
    children?: React.ReactNode;
}

const PaymentButton = ({ className, children }: PaymentButtonProps) => {
    const LoadScript = () => {
        return new Promise((resolve) => {
            const Script = document.createElement("script");
            Script.src = "https://checkout.razorpay.com/v1/checkout.js";
            Script.onload = () => resolve(true);
            Script.onerror = () => resolve(false);
            document.body.appendChild(Script);
        })
    }
    const HandlePayment = async () => {
        const userStr = localStorage.getItem('user');
        const user = userStr ? JSON.parse(userStr) : null;

        if (!user) {
            toast.error("Please log in to upgrade your plan.");
            return;
        }
        const res = await LoadScript();
        if (!res) {
            toast.error("Razorpay Failed To Load");
        }
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/create-order`);
        const option = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: data.order.amount,
            currency: data.order.currency,
            name: "ProFolioX",
            description: "Premium Plan",
            order_id: data.order.id,

            handler: async function (response: any) {
                const verify = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/verify-payment`, { ...response, userId: user._id });
                if (verify.data.success) {
                    toast.success("Payment Success")
                    const updatedUser = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/user/me`, {
                        // ✅ CORRECT
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }

                    })
                    localStorage.setItem('user', JSON.stringify(updatedUser.data.user));

                    window.location.reload();
                } else {
                    toast.error("Payment Failed");
                }},
            theme: {
                color: "#6366f1"
            }
        };
        const PaymentObject = new (window as any).Razorpay(option);
        PaymentObject.open();
    };
    return (
        <button onClick={HandlePayment} className={className || "bg-indigo-600 text-white px-4 py-2 rounded"}>
            {children || "Upgrade To Premium"}
        </button>
    )
}
export default PaymentButton