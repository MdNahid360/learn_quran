import { ArrowPathIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import { SaveContext } from '../../App';
import SaveItem from '../SaveItem/SaveItem';
  
const Save = () => {
     const [saveData, setSaveData] = useContext(SaveContext)
     const clear = ()=>{
        setSaveData([]);
     }
    console.log(saveData);

     return (
        <div className="p-2">
        <div className="flex items-center justify-between">
            <h1 className='font-bold text-xl text-purple-500'>Saved : {saveData.length}</h1> <button className="bg-red-200 text-red-600 rounded-lg px-2 py-1 flex items-center" onClick={clear}>Clear <ArrowPathIcon className='w-4 ml-2'></ArrowPathIcon></button>
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 mt-5 gap-3'>
         {
            saveData.map(save => <SaveItem save={save}></SaveItem>)
         }
        </div>
        </div>
    );
};

export default Save;