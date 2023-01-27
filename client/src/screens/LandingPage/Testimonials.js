import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogImg from '../../assets/images/2.png'


function Testimonials() {
  const [testimonialList,setTestimonialList] = useState([])

  useEffect(() => {
    //axios get req to fetch limited amount of comments
    axios.get("http://localhost:3001/comments/fetchsome").then((res)=>{
      setTestimonialList(res.data)
    })
  },[])

  return (
    <div className="w-full flex justify-center py-10 my-10 bg-gray-700 sm:bg-inherit">
      <div className="sw flex items-center flex-wrap">

        {/* Big Header */}
        <div className="flex-1 flex flex-col gap-3 px-10">
          <p className="uppercase">Testimonials</p>
          <h1 className="text-white sm:text-inherit">Customer comments<br /></h1>
          <p className="text-white sm:text-inherit">Popular customers who are satisfied with our work.</p>

          
        </div>

        <div className="flex-1 flex flex-col gap-4 my-10">
          {
            // Listing Sample Data from variable
            testimonialList.map((list,i) => (
              <div className="bg-red-100 min-w-[300px] quote flex" key={i}>
                <div className="p-1">
                  <img src={list.img || BlogImg || null} alt='User' className="w-20 h-20 avatar" />
                </div>
                <div className="p-4">
                  <h3>{list.fullname}</h3>
                  <p>"{list.comment}"</p>
                  <small className="text-pink-500">{list.createdAt}</small>
                </div>
              </div>  
            ))
          }
          {
            //View more to view more comments
          }
          <Link to="/contactus"><span className="btn-sty4">View More</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;