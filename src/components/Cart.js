import React from 'react';

function Cart({cart,setCart}) {
    

    let subtotal = 0;
    cart.forEach(element => {
        subtotal += element.dis;
    });
    const coupon = 'FREEINSPECTION';

    const removeService = ()=>{
        setCart([])
    }

    return (
        <div className="fixed top-48 right-10 p-4 bg-white rounded-md shadow-lg w-full max-w-md mx-auto">
            <div className='text-2xl font-semibold mb-4'>Cart</div>
            <hr></hr>
            {/* Cart Items */}
            <div className="mb-4 ">
                
                {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b py-2">
                        <p className="text-sm font-semibold">{item.name}</p>
                        <div className="text-xs text-gray-500 line-through">₹ {item.price}</div>
                        <div className="text-lg font-bold text-red-600">₹ {item.dis}</div>
                        <button onClick={removeService} className="text-gray-400 hover:text-red-500">&times;</button>
                    </div>
                ))}
            </div>

            {/* Membership */}
            <div className="bg-black text-white flex items-center justify-between p-2 mb-4">
                <button className="px-2 py-1 text-xs font-semibold bg-red-500 rounded">Miles</button>
                <button className="px-2 py-1 text-xs font-semibold">Membership</button>
                <p className="text-xs">• ₹ 20,000 Annual Savings • Free SOS and much more</p>
                <button className="text-lg font-bold text-white">&gt;</button>
            </div>

            {/* Subtotal */}
            <div className="text-gray-700 text-lg mb-2 text-left">
                <p className="font-semibold">
                    Subtotal <span className="text-sm">({cart.length} Items)</span>
                    <span className="float-right text-black font-bold">₹ {subtotal}</span>
                </p>
                <p className="text-sm text-gray-500">Extra charges may apply</p>
            </div>

            {/* Coupon */}
            {/* <div className="bg-blue-100 text-blue-700 px-3 py-2 rounded mb-4 flex justify-between items-center">
                <span>
                    <span className="font-semibold">FREEINSPECTION - </span>
                    Coupon Applied
                </span>
                <button className="text-gray-500 hover:text-red-500">&times;</button>
            </div> */}

            {/* Total and Checkout */}
            <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                <span className="text-red-600 font-bold text-2xl">₹ {subtotal}</span>
                <button className="bg-red-500 text-white py-2 px-6 font-bold rounded-lg hover:bg-red-600">
                    CHECKOUT
                </button>
            </div>
        </div>
    );
}

export default Cart;
