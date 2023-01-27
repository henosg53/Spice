import React from "react";
import Intro from "./Intro";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Comment from "../../components/comment";
import FAQ from "./FAQ";




function Index() {
  return (
    <div className="flex flex-col justify-center self-stretch">
      <Intro />
      <Comment/>
      <Services/>
      <AboutUs/>
      <Testimonials/>
      <FAQ/>
    
      

      {/* <WhyFixer />
      <Features />
      <MoreFeatures />
      <FAQ />
      <Testimonials />
      <OurBlog /> */}
      {/* <Login/> */}
      <Footer />
      <div className="p-10">&nbsp;</div>
    </div>
  )
}

export default Index;