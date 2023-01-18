import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import Sura from '../Sura/Sura';
 const AllSura = (props) => {
    const [chapters, setChapters] = useState([])
    useEffect(() => {
        fetch('https://api.quran.com/api/v3/chapters')
        .then(res => res.json())
        .then(data => setChapters(data.chapters))
    },[]);

  

        return (
                <div className='p-3 bg-white mt-4 rounded-lg'>
           <div className="flex justify-between">
                <h1 className='text-2xl font-bold'>Sura</h1>
           </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 mt-5 gap-3">
                {
                chapters.map(chapters => <Sura key={chapters.id} save={props.save} chapters={chapters}></Sura>)
            }
            </div>
        </div>
     );
};

export default AllSura;