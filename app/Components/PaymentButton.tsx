"use client";

import axios from "axios";
import {toast} from "react-hot-toast";

interface PaymentButtonProps {
    className?: string;
    children?: React.ReactNode;
}

const PaymentButton = ({ className, children }: PaymentButtonProps) =>{
    const LoadScript = () =>{
        return new Promise((resolve) =>{
            const Script = document.createElement("script");
            Script.src = "https://checkout.razorpay.com/v1/checkout.js";
            Script.onload = () => resolve(true);
            Script.onerror = () => resolve(false);
            document.body.appendChild(Script);
        })
    }
    const HandlePayment = async() =>{
        const res = await LoadScript();
        if(!res){
            toast.error("Razorpay Failed To Load");
        }
        const {data}  = await axios.post("http://localhost:5000/api/payment/create-order");
        const option = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: data.order.amount,
            currency: data.order.currency,
            name:"ProFolioX",
            description:"Premium Plan",
            order_id:data.order.id,

            handler:async function(response:any){
                const verify = await axios.post("http://localhost:5000/api/payment/verify-payment",response);
                if(verify.data.success){
                    toast.success("Payment Success")
                }else{
                    toast.error("Payment Failed");
                }
            },
            theme:{
                color:"#6366f1"
            }
        };
        const PaymentObject = new (window as any).Razorpay(option);
        PaymentObject.open();
    };
    return(
        <button onClick={HandlePayment} className={className || "bg-indigo-600 text-white px-4 py-2 rounded"}>
            {children || "Upgrade To Premium"}
        </button>
    )
}
export default PaymentButton