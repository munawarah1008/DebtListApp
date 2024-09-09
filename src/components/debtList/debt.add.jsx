"use client";
import React, { useState } from 'react';
import {useRouter} from "next/navigation";

export const DebtAdd = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [payment_due_date, setPayment] = useState("");

async function handleAddDebt(){
        await fetch("https://v1.appbackend.io/v1/rows/SXsMhsVe0ljU", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify([{name, amount, payment_due_date}])
        });

        router.refresh();    
    }

  return (
    <div className="app-wrapper">
            <h1 className="app-title">Debt List App</h1>
            <div className="form-container">
                <input
                    className="input-field"
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    className="input-field"
                    placeholder="Enter amount"
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input
                    type="date"
                    className="input-field"
                    onChange={(e) => setPayment(e.target.value)}
                />
                <button onClick={handleAddDebt} className="btn-primary">
                    Save
                </button>
            </div>
        </div>

  )
}
