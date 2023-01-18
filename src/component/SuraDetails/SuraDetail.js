import { ArrowUturnLeftIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SuraCart from '../SuraCart/SuraCart';

const SuraDetail = () => {
     let {suraId} = useParams()
     const [suraDetails, setSuraDetails] = useState([]);
             
     fetch(`https://api.quran.com/api/v3/chapters/${suraId}/verses?recitation=1&translations=21&language=en&text_type=words`)
     .then(res => res.json())
     .then(data => setSuraDetails(data.verses))
        
     let dontLoad = (suraDetails.length);
     const [ns, setNs] = useState();
     fetch(`https://api.quran.com/api/v3/chapters/${suraId}`)
     .then(res => res.json())
     .then(data =>{ setNs(data.chapter.name_simple)})
    
     return (
        <div>
            <h1 className='text-xl text-center pb-3'>{ns}</h1>
            <hr className='border-lg border-indigo-200'/>
             <div className={`overflow-hidden mt-2 ${dontLoad >= 10 ?'flex items-center bg-red-200 text-red-500 p-3 w-[90%] m-auto' : 'none'} `}>
                 <ExclamationCircleIcon className={`mr-2 ${dontLoad >= 10 ? 'w-6' : 'w-0'}`}></ExclamationCircleIcon>
                 {dontLoad >= 10 ? '!!! OOPS sorry more verse not loaded' : ''}
           </div>
          {
            suraDetails.map(sura => <SuraCart key={sura.id} sura={sura}></SuraCart>)
          }
          
        </div>
    );
};

export default SuraDetail;