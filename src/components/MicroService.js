import React, { useState } from 'react';

function MicroService({plan,setCart}) {

    const [isAdd,setIsAdd] = useState(false);
    const serviceAdded = ()=>{
        setIsAdd((prev)=>!prev)
        setCart((prev)=> [...prev,plan]);
    }

    return (
        <div className="flex bg-white border rounded-lg p-4 m-1 shadow-lg w-3/5">
            {/* Image */}
            <div className="w-1/3  mr-4 flex flex-col justify-center items-center">
                <img
                    src="https://via.placeholder.com/100" // Replace with your image URL
                    alt="Premium Top Wash"
                    className="rounded w-36"
                />
                <div className=' mt-4'>
                    <span className="text-gray-400 line-through">{plan.price}</span>
                    <span className="text-lg font-bold text-black ml-2">{plan.dis}</span>
                </div>
            </div>
            
            {/* Service Details */}
            <div className="w-2/3 flex flex-col justify-between text-left">
                {/* Title and Description */}
                <div>
                    <h2 className="text-xl font-semibold capitalize">{plan.name}</h2>
                    <p className="text-sm text-gray-600 mt-1    ">
                        • Pickup Charges Additional in Invoice • Applicable on Walk-in Only
                    </p>
                </div>
                
                {/* Service Features */}
                <ul className="text-sm text-gray-700 mt-2 space-y-1 flex flex-wrap justify-between">
                    <li className="flex items-center">
                        <span className="text-green-500">✔</span> Exterior Top Wash
                    </li>
                    <li className="flex items-center">
                        <span className="text-green-500">✔</span> Hand Drying
                    </li>
                    <li className="flex items-center">
                        <span className="text-green-500">✔</span> Rinsing
                    </li>
                    <li className="flex items-center">
                        <span className="text-green-500">✔</span> Tyre external wash
                    </li>
                </ul>
                
                {/* Price and Add to Cart */}
                <div className="flex items-center justify-end mt-4 w-full">
                    <button onClick={serviceAdded} className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white">
                        {isAdd ? "Added" : "+ ADD TO CART"}
                        
                    </button> 
                    
                </div>
            </div>
        </div>
    );
}

export default MicroService;
