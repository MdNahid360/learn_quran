import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AudioCart from '../AudioCart/AudioCart';
const Audio = () => {
    const [audio, setAudio] = useState([]);
    useEffect(() => {
         fetch('https://api.quran.com/api/v4/chapter_recitations/1?language=en')
         .then(res => res.json())
         .then(data => setAudio(data.audio_files))
    },[]);
    console.log(audio);
     return (
       <div className="p-3">
            <h2 className='font-bold text-xl'>Audio</h2>
             <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                audio.map(audio => <AudioCart key={audio.id} audio={audio}></AudioCart>)
            }
        </div>
       </div>
    );
};

export default Audio;