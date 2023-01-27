//Frequently asked questions component
import React from "react";


// Sample Data
const faqList = [
  {
    q: "Do you offer delivery services?",
    ans: "Not currently, but the team is working on it"
  },
  {
    q: "Do you supply a vast amount of products?",
    ans: "Yes We can ."
  },
  {
    q: "Are your spices certified?",
    ans: "All our products are verified by MOH."
  }
]
function FAQ() {
  return (
    <div className="w-full flex justify-center ">
      <div className="sw flex justify-center ">
        <div className="bg-gray-200 rounded p-10 w-full flex flex-col items-center ">
          <p className="tracking-widest">F.A.Q.</p>
          <h1 className="py-4 mb-4 ">Frequently Asked Questions</h1>
          <hr className="w-full mb-7" />
          <div className="list-sty2 ">
            {
              /* Listing questions and answers from a variable */
              faqList.map((faq,i) => (
                <li key={i}>
                  <h4 className='inline-block'>{faq.q}</h4>
                  <div className="py-1 pb-4">{faq.ans}</div>
                </li>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ;