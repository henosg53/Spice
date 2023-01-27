import React, { useEffect, useState } from "react";
import BlogImg from '../../assets/images/2.png'
import Footer from "./Footer";
import axios from 'axios'




function OurBlog() {
  const [blogList,setBlogList] = useState([]);
 
  

  useEffect(() => {
    axios.get("http://localhost:3001/blogs").then((res)=>{
      setBlogList(res.data)
    
    })
    
  },[])

  return (
    <div className="w-full flex justify-center ">
      
      <div className="sw flex flex-col items-center mt-2">
      <NewsLetter />
       
        <h2 className="pb-10">Latest News and Blogs</h2>
        {/* <p className="text-xl">Follow up by clicking the notifications button</p><br></br> */}
        <div className="flex flex-wrap gap-3 w-full mt-12 justify-center ">
          {
            // Listing Blog Object from variable
            blogList.map((blog,i) => (
              <div className="flex-wrap card-sty2 min-h-[300px] w-[500px] sm:w-[800px] sm:h-[500px] " key={i}>
                <div className="img-cont">
                  <img alt='User' className=" text-[0]" src={"http://localhost:3001/uploads/"+blog.img||BlogImg} />
                </div>
                <div className="title">
                  <small>{blog.createdAt}</small>
                  <h4>
                  {blog.title}
                  </h4>
                </div>
                <div className="description">
                  <h4 >{blog.description}</h4>
                  
                </div>
              </div>
            ))
          }
        </div>

        
        
      
        <Footer/>
      </div>
    </div>
  )
}

function NewsLetter() {
  const [mail,setMail] = useState('')

  const handleSubscription = ()=>{
    axios.post('http://localhost:3001/subscriptions/',{
      email: mail
    }).then((res)=>{
      window.location.replace("http://localhost:3000/blogs")
                
      },[])
    
  }
  

  return (
    <div className="flex flex-wrap w-full py-10">
      <div className="flex-1 min-w-[50%]">
        <h4>NewsLetter</h4>
        <p>Don't forget to subscribe</p>
      </div>

      <form method="post"  className="flex-1 flex gap-2 justify-end items-center flex-wrap">
        <input type='text'  onChange={(e)=>{setMail(e.target.value)}} placeholder="Your Email" className="self-center flex-1" />
        <button type="submit" onClick={handleSubscription} className="btn-sty4 w-full sm:w-auto pb-0">Subscribe</button>
      </form>
    </div>
  )
}

export default OurBlog;