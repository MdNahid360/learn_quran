import React, { useState } from 'react';
import { useEffect } from 'react';
import banner from '../../img/bgC3.jpg'
const AudioCart = (props) => {
    const {id,audio_url,chapter_id,chapter_name, name_arabic, name_simple, revelation_place, verses_count} = props.audio;
     const [cName, setCName] = useState([]);
     useEffect(() => {
        fetch(`https://api.quran.com/api/v4/chapters/${chapter_id}?language=en`)
        .then(res => res.json())
        .then(data => setCName(data.chapter))
     },[])

    return (
        <div>
              <div className="name  rounded-xl  shadow-md shadow-gray-400/50 md:h-[160px] overflow-hidden" style={{ 
                         backgroundImage: `linear-gradient(160deg,rgba(255,255,255,0.82),rgba(246, 846, 246 ,0.99)),url(${banner})`, backgroundSize: 'cover'}}>
              <div className="p-3">
                  <h1 className='text-3xl'>{cName.name_arabic}</h1>
                <p className='text-sm'>{`( ${cName.name_simple} )`}</p>
                <p className='text-sm'>Revelation place : {cName.revelation_place}</p>
              </div>
                <div className="p-2 w-full md:mt-[18px] mt-[20px] h-[46px] relative">
                    <audio controls className='h-[40px] absolute left-0 top-[2px]  bottom-0 right-0  bg-[#EAF1F4] outline-none w-full'>
                        <source src={audio_url}
                        type="audio/mpeg">
                            </source>
                        </audio>
                </div>
              </div>
        </div>
    );
};

export default AudioCart;