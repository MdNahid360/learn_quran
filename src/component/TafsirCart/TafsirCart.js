import React from 'react';
import banner2 from '../../img/quranbg-3.jpg';

const TafsirCart = (props) => {
    const {id, author_name, name, slug,} = props.tafsir;
    return (
            <div className="shadow-md shadow-indigo-500/40 p-3 rounded-xl flex items-center justify-center h-[180px] text-white duration-150 hover:shadow-lg hover:shadow-green-500/50 hover:mt-[-2px] cursor-pointer"  style={{ 
                         backgroundImage: `linear-gradient(rgba(12, 153, 78,0.82),rgba(6, 71, 68,0.99)),url(${banner2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
               <div className="text-white">
                   <h1 className='font-bold text-center text-xl'>{name}</h1>
                <p className='text-sm mt-4 text-center'>
                    <b className=' text-center'>Author :</b> {author_name}</p>

                    <p className='text-sm text-center '>
                    <b className='text-center'>Slug :</b> {slug}</p>
               </div>
              </div>
    );
};

export default TafsirCart;