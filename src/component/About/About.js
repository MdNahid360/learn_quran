import React from 'react';
import quran from '../../img/quran.png'
const About = () => {
    return (
     <>
           <h1 className="text-center p-2 text-2xl font-semibold relative after:w-[70px] after:h-[5px] after:rounded-lg after:bottom-0 after:left-0 after:right-0 after:m-auto after:bg-[#672CBC] after:absolute">About</h1>
        <div className="md:grid grid-cols-12 md:px-16 px-4 mt-16">
           <div className="lg:col-span-6 md:col-span-12 flex items-center">
                <span>
                    <h1 className="text-3xl font-bold"><span className="text-[#672CBC]">Al Quran</span> the last holy divine  book</h1>
              <p className="mt-6 leading-8">The Holy Quran is the Holy Book or the Scripture of the Muslims. It lays down for them the law and commandments, codes for their social and moral behaviour, and contains a comprehensive religious philosophy. The language of the Quran is Arabic. It is a compilation of the verbal revelations given to the Holy Prophet Muhammad(sa) over a period of twenty three years.</p>
                </span>
           </div>
           <div className="lg:col-span-6 lg:flex hidden justify-center">
               <img src={quran} className='w-[300px]' alt="" />
           </div>
        </div>
     </>
    );
};

export default About;