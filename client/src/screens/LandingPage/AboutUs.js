import React from "react";

function AboutUs() {
  return (
    <div className="w-full flex justify-center py-20">
      <div className="sw flex flex-col">

        {/* Company Description */}
        <div className="flex flex-row-reverse flex-wrap justify-between ">
          <div className="flex-col sm:scale-125 flex justify-center my-3">
            <h2 className="text-center">About Spice Co.</h2>
            <div className="py-4 text-center">We are us.We are us.We are us.We are us.We are us.We are us.<br></br>
            We are us.We are us.We are us.We are us.We are us.We are us.We are us.<br></br>
            We are us.We are us.We are us.We are us.We are us.We are us.We are us.<br></br>
            We are us.We are us.We are us.We are us.We are us.We are us.We are us.<br></br>
            We are us.We are us.We are us.We are us.We are us.We are us.We are us.<br></br></div>
            
          </div>

          {/* Quality Assurance */}
          <div className="flex-1 flex flex-col max-w-[500px] min-h-[300px] justify-center bg-[url('./assets/images/slide-img.jpg')] mt-2 ">
           
            <h2 className="text-white text-center">Company Photo</h2>
    
            <div></div>
          </div>
          
        </div>

        
      </div>
    </div>
  )
}

export default AboutUs;