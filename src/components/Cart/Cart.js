import React from 'react';

const Cart = ({ cart }) => {
    const { id, name, logo, total } = cart;
    return (
        <div className=''>
            <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2 flex justify-between items-center">
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <p className="text-gray-800">Question: {total}</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50 gap-4">Start Practice
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;