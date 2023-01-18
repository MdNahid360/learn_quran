import { PlayIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import banner from '../../img/banner4.jpg';
import TafsirCart from '../TafsirCart/TafsirCart';

const Tafsir = () => {
    const [tafsir, setTafsir] = useState([])
    useEffect(() => {
        fetch('https://api.quran.com/api/v4/resources/tafsirs?language=en')
        .then(res => res.json())
        .then(data => setTafsir(data.tafsirs))
    },[])
    return (
        <>
       
        {/* banner */}
        <div className="p-3">
            <div className="banner md:h-[300px] rounded-lg p-3 flex justify-center"  style={{ 
                         backgroundImage: `linear-gradient(rgba(7, 142, 75,0.72),rgba(5, 71, 58,0.91)),url(${banner})`, backgroundSize: 'cover'}}>                
                  <div className="text-center text-white py-4 md:mt-16">
                      <h1 className="text-4xl font-bold"><span className="text-[#d1ea74] md:text-[52px] font-bold">T</span>afsir</h1>
                  <p className="md:text-xl">Tafsir generally refers to interpretation of the Qur'an.</p>
                   <a target='_blank' href="https://youtu.be/eeKvpOLUSWI" className='flex m-auto md:mt-8 mt-2 justify-center items-center duration-150 w-[50px] h-[50px] rounded-full border-2 border-white hover:border-none hover:shadow-lg shadow-black-400/50 hover:bg-white hover:text-black'>
                     <PlayIcon className="w-8 duration-150 hover:text-black  "></PlayIcon>
                    </a>

                  </div>
            </div>
        </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 p-3">
            {
              tafsir.map(tafsir => <TafsirCart key={tafsir.id} tafsir = {tafsir}></TafsirCart>)
            }
          </div>
        </>
    );
};

export default Tafsir;