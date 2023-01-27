import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogImg from '../../assets/images/2.png'
import {Formik,Form} from 'formik'
 




function ContactUs() {
  const [email,setEmail] = useState('')
  const [fullname,setFullname] = useState('')
  const [comment, setComment] = useState('')


  const submitComment =()=>{
    axios.post('http://localhost:3001/comments/create',
            {
                fullname: fullname,
                email: email,
                comment: comment
            }).then((res)=>{
                console.log(res.data)
                if(res.data)
                    window.location.reload()  
                

            })

  }
 

  return (
    
    <div className="w-full flex justify-center py-10 my-10 ">
      <div className="sw flex items-center flex-wrap">

        {/* Big Header */}
        <div className="flex-1 flex flex-col gap-3 px-10">
          <p className="uppercase">Join Spice Co.</p>
          <h1>Contact us</h1>
          <p>Email: spiceco@gmail.com</p>
          <p>Phone: +251911000000</p>
          <p>Address: Mars</p>

          
        </div>

        <div className="flex-1 flex flex-col gap-4 my-10">
            
          
           
              <div className=" min-w-[300px] quote flex-col bg-gray-200">
                
              <h3 className="text-center">Comments Section</h3><br/>
              <Formik onSubmit={submitComment}>

                <Form>
                  <div className="p-4">
                    <input type="text" onChange={(e)=>{setFullname(e.target.value)}} placeholder="Your name"/> <br/> 
                    <input type='email'  onChange={(e)=>{setEmail(e.target.value)}} placeholder="Your Email"/>
                  </div>
                  <div className="p-4" >
                    <textarea className="" onChange={(e)=>{setComment(e.target.value)}} placeholder="Leave your comments or suggestions...." cols='50' rows='5'></textarea><br/>
                    <button className="btn-sty4 my-5  rounded-r bg-slate-200">Submit</button>
                  </div>
                </Form>
                </Formik>
                
              </div>  
          </div>
        
          <Testimonials/>
         
      </div>
      
    </div>
  )
}

function Testimonials(){
  const [testimonialList,setTestimonialList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/comments/fetch").then((res)=>{
      setTestimonialList(res.data)
    })
  },[])

  return(
    <div className="mt-24">
     { <div className="flex-1 flex flex-col gap-4 my-10">
          <h3 className="text-center">Your Comments & Suggestions</h3><br/>
          {  
             // Listing Sample Data from variable
            testimonialList.map((list,i) => (
              <div className=" bg-red-100  min-w-[300px] quote flex" key={i}>
                <div className="p-1">
                  <img src={list.img || BlogImg ||null} alt='User' className="w-20 h-20 avatar" />
                </div>
                <div className="p-4">
                  <h3>{list.fullname}</h3>
                  <p>"{list.comment}"</p>
                  <small className="text-pink-500">{list.createdAt}</small>
                </div>
              </div>  
            ))
          }
        </div> }
      </div>
  )


}

export default ContactUs;