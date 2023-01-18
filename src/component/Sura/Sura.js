import React, { useState } from 'react';
import makka from '../../img/makka.png';
import madena from '../../img/madena.png';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { createContext } from 'react';
import { BookmarkSquareIcon } from '@heroicons/react/24/solid';

const Sura = (props) => {
    let {save,chapters} = props
    let {id,name_arabic,name_complex, chapter_number, verses_count, revelation_place, chapter_id} = chapters;    

   
   
    return (
             <div  className={`bg-[#e7e4fa] p-3 flex items-end rounded-lg duration-150 hover:bg-[#d2eaf4]`}>
             <Link to={`/${id}`} className='w-full'>
            <h4 className="text-xl"> ({chapter_number}) <b className="text-2xl">{name_arabic}</b> <small className='text-[13px]'>({name_complex})</small></h4>
             <div className="flex justify-between items-end">
                <p title={revelation_place} className="text-[13px] flex items-end"> <span className="flex items-center"> {revelation_place === 'makkah'? <img className='w-9' src={makka} alt="" /> : <img className='w-6' src={madena} alt="" />} </span>  verses: ({verses_count})</p>
             </div>
            </Link>
            <button title='Save' onClick={()=> save(chapters)}>
                    <BookmarkSquareIcon className="w-6"></BookmarkSquareIcon>
            </button>
          </div>
    );
};
export default Sura;