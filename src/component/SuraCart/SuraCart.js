import React, { useState } from 'react';

const SuraCart = (props) => {
    const {sura} = props;
    const {text_indopak, verse_number} = sura;
    
    return (
        <div className='bg-purple-200 p-3 text-right m-2'>
           <h4 className='flex items-center justify-end text-md '>
                <span className='mr-2 text-[20px] font-bold'> {text_indopak}</span><span>({verse_number})</span>
           </h4> 
            
        </div>
    );
};

export default SuraCart;