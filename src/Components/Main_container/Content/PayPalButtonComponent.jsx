import React, { useEffect } from 'react';
import MMRBoosting from './MMRBoosting';

const PayPalButtonComponent = ({ totalBillUsd, paymentMethod }) => {
    // This function will open the new tab with PayPal button
    const openPayPalInNewTab = () => {

        const newWindow = window.open("", "_blank"); // Opens a new blank tab
        if (newWindow) {
            newWindow.document.write("<div id='paypal-button-container'></div>"); // Create a container in the new tab
            const script = newWindow.document.createElement("script");
            script.src = `https://www.paypal.com/sdk/js?client-id=AUfpwspp0QgyqkwKmYo1KqEv4rlIHg38CxFIab3cN9DpG-Y6N-BipaERqD98ipEFaxC-Jh0Vjozy2y5A`;
            script.async = true;
            newWindow.document.body.appendChild(script);

            script.onload = () => {
                newWindow.paypal.Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: totalBillUsd
                                }
                            }]
                        });
                    },
                    onApprove: (data, actions) => {
                        return actions.order.capture().then(function (details) {
                            alert('Transaction completed by ' + details.payer.name.given_name);
                        });
                    }
                }).render(newWindow.document.getElementById("paypal-button-container"));
            };
        }
    };

    return (
        <button
            className="text-2xl border-2 border-white pl-[70px] pr-[70px] p-2 rounded-full text-white font-bold bg-gradient-to-b from-[#231c30] to-white/20 hover:scale-110 duration-300"
            onClick={() => {
                if (paymentMethod == "Paypal") {
                    openPayPalInNewTab();

                } else {
                    alert("Please log in to access PayPal.");
                }
            }}
        >
            <span>
                <i className='bx bx-cart-add text-white text-4xl'></i>
            </span>
            Checkout
        </button>
    );
};

export default PayPalButtonComponent;
