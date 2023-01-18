import React from 'react';
import { Menu } from '../Header/Header';
import banner from '../../img/bg-2.PNG'
import m from '../../img/pngwing.com.png'
import AllSura from '../AllSura/AllSura';
const Home = (props) => {
    return (
        <div className="">
             <div className="md:flex">
                  <div className="bg-gray-100 w-full h-full p-3">
                        <div className="banner rounded-lg h-[300px] bg-cover bg-no-repeat flex items-center"  style={{ 
                         backgroundImage: `url(${banner})` 
                        }}>
                            <div className="w-[500px]">
                                <img src={m} className="md:w-[150px] w-[100px] m-auto" alt="" />
                           <h2 className="text-white md:text-[26px] text-[20px] font-[600] p-4 text-center font-libre">
                               There is no god but Allah,<br /> Muhammad is His Messenger.
                           </h2>
                            </div>
                        </div>
                        <div className="body">
                             <AllSura save={props.save}></AllSura>
                        </div>
                  </div>
             </div>
        </div>
    );
};

export default Home;