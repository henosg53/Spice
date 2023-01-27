import React from "react";

function Services() {
  return (
    <div className="w-full flex justify-center py-8 bg-gray-600 sm:bg-inherit">
      <div className="sw flex justify-center">
        <div className="flex flex-col items-center">
          <p>Spice</p>
          <h2 className="py-4 text-white sm:text-black">Our services</h2>
          <div className=" flex-wrap w-full sm:flex py-6 gap-4 ">

            {/* Cards */}
            
            <div className="card-sty1 min-w-[200px] sm:w-[550px]  flex-1 my-3">
              <div className="py-2">
               
              </div>
              <h4 className="text-center">Import/Export</h4>
              <p>We provide services.We provide services.We provide services.We provide services.We provide services.</p>
            </div>

            <div className="card-sty1 min-w-[200px]  sm:w-[550px]  flex-1 my-3">
              <div className="py-2 ">
               
              </div>
              <h4 className="text-center">Custom Spices</h4>
              <p>We provide services.We provide services.We provide services.We provide services.We provide services.</p>
            </div>
            
            <div className="card-sty1 min-w-[200px]  sm:w-[550px]  flex-1 my-3">
              <div className="py-2">
                
              </div>
              <h4 className="text-center">Spice Consulting</h4>
              <p>We provide services.We provide services.We provide services.We provide services.We provide services.</p>
            </div>

          </div>
          {/* Quality Assurance */}
          <div className="flex flex-col justify-center bg-gray-100  w-full px-20 py-10">
            <p>Our Quality</p>
            <h2>Service Features</h2>
            <div className="py-4">We can assure you that you will get quality services</div>
            <p className="py-4 list-sty1 flex flex-col gap-2">
              <li>24/7 delivery</li>
              <li>State of the art packing</li>
              <li>Quick Delivery</li>
              <li>Bonus Packages</li>
            </p>
            <div></div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Services;