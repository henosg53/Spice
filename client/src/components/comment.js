//comment component for intro
import BlogImg from '../assets/images/2.png'
function Comment(){
    return(
        <figure className="md:flex bg-slate-600  sm:rounded  sm:ml-5 sm:mr-5 sm:px-5 sm:h-[200px] sm:w-fit p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-56 md:h-auto md:rounded-none rounded-full mx-auto" src={BlogImg} alt="" width="384" height="512"/>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p className="text-lg text-white font-medium">
                    “Spices might be God's greatest creation, Other than human beings. And I mean the Good ones.
                    And as an Ethiopian, One of the most Spice maker and consumer people on the planet; I can definately
                    say that the world would suck without spices.”
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                    Natnael Tilaye
                </div>
                <div className="text-slate-300 dark:text-slate-500">
                    Spice Co. CEO, Addis Ababa
                </div>
                </figcaption>
            </div>
        </figure>
    )
}
export default Comment