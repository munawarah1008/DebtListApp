"use client"
import React from 'react';
import {useRouter} from "next/navigation";

export const DebtList = ({id, name, amount, payment_due_date}) => {
    const router = useRouter();

    async function handleDeleteDebt() {
        await fetch("https://v1.appbackend.io/v1/rows/SXsMhsVe0ljU", {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify([id])
        });

        router.refresh();  
    }

    return (
        <div className=''>
        <div className="card">
                <h3>{name}</h3>
                <p>{amount}</p>
                <p>{payment_due_date}</p>
                <div className="btn-wrap">
                    <button onClick={handleDeleteDebt} className="btn-secondary">
                        Delete
                    </button>
                </div>

        </div>
        </div>
    )
} 