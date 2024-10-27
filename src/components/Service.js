import React, { useEffect, useState } from 'react'
import MicroService from './MicroService'
import { Link } from 'react-router-dom'
import Cart from './Cart'

function Service() {

    let services = ['Pressure Car Wash','UnderBody','Waterless Cleaning','CarDeep Clean','Wash and Coat','Bike Wash']

    let micro = [
        [ { name: 'Hybrid ceramic and interior with underbody', price: 1058, dis: 590 },
        { name: 'exterior and interior with underbody', price: 958, dis: 456 },
        { name: 'exterior and interior', price: 818, dis: 456 },
        { name: 'pressure exterior only', price: 398, dis: 199 }],

        [ { name: 'hybrid ceramic and interior', price: 1058, dis: 599 },
        { name: 'exterior and interior with underbody', price: 968, dis: 499 }],

        [{ name: 'waterless exterior and interior', price: 818, dis: 499 },
        { name: 'interior only', price: 618, dis: 309 },
        { name: 'exterior only', price: 398, dis: 199 }],
        [{ name: 'seat deep clean exterior', price: 1698, dis: 879 },
        { name: 'roof clean and exterior', price: 1698, dis: 899 },
        { name: 'dashboard deep', price: 1608, dis: 899 }],
        [{ name: 'hybrid ceramic with interior', price: 1008, dis: 499 },
        { name: 'hybrid ceramic with interior with underbody', price: 998, dis: 399 }],
        [{ name: 'bike pressure wash', price: 398, dis: 199 },
        { name: 'bike pressure wash with coat', price: 298, dis: 99 }] 
    ]

    // State to keep track of the active service
    const [activeIndex, setActiveIndex] = useState(0);

    // Cart logic
    const [cart,setCart] = useState([])
    const handleClick = (index) => {
        setActiveIndex(index);
    };

    // useEffect(()=>{
    //     console.log(cart);

    // },[cart])

    

  return (
    <div className='bg-gray-200 w-full pt-20 text-black'>

        {/* Serivce */}
        <div className='fixed bg-white w-full'>
            <h1 className='text-black text-2xl'>Services</h1>

            {/* diffent services navbar */}

            <div className=' w-full h-16 flex justify-center items-center'>
                {services.map((e,index)=>(
                    <a key={index} href ={"#s"+index}  onClick={() => handleClick(index)}>
                        <div  className={`w-40 border-2 mx-4 p-2 text-center ${
                            activeIndex === index ? 'bg-red-500 text-white' : 'border-red-300 text-black hover:bg-red-200'
                        }`}>
                            {e}
                        </div>
                    </a>
                ))}
            </div>
        </div>

        {/* cart */}
        <Cart cart={cart} setCart={setCart} />

        {/* Single serveices */}
        <div className='p-5 pt-20'>
            { services.map((e,ind)=>(<div key={ind}>
                <div   id={'s'+ind} className='text-left p-4 sevice-name text-2xl font-semibold scroll-mt-48   mt-10'>{e}</div>
                {micro[ind].map((e,index)=>(
                    <div key={index} className=''>
                        <MicroService plan={e} setCart = {setCart}></MicroService>
                    </div>
                    
                ))}
                
            </div>))
                
            }
            
        </div>
        

    </div>
  )
}

export default Service