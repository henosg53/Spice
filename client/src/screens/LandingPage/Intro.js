import React from "react";
import { Link } from "react-router-dom";
// import {ReactComponent as MobileViewImg} from '../../assets/images/mobile-view.svg';

function Intro() {
  return (
    <div className="flex items-center justify-center h-[400px] w-full px-5 bg-[url('./assets/images/slide-img.jpg')] sm:bg-none bg-fit text-white sm:text-black">
      <div className="flex  items-center justify-center w-full  py-10 sm:bg-gray-100" > 
        <div className="flex flex-col justify-center  p-4">
          <p className="text-white sm:text-gray-500">Spice Co.</p>

          {/* Big Header Content */}
          <h1>Are you a Spices fanatic?</h1>
          <p className="text-white sm:text-gray-500 py-10">Find the spice you are looking for, available and nearby.<br />Hundreds of local and foriegn spice variants available here.</p>
          <Link to='/products' className='btn-sty4'>View Our Garden</Link>
        </div>

        {/* SVG Mobile View Image */}
        <div className="flex-1 flex justify-center">
          {/* <MobileViewImg className="h-[500px] w-[300px] min-w-[300px]" /> */}
        </div>
      </div>
    </div>
  )
}

export default Intro;