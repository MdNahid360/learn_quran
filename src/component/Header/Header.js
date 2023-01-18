import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
 import Home from '../Home/Home';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import About from '../About/About';
import SuraDetail from '../SuraDetails/SuraDetail';
import { BookmarkIcon, ClipboardDocumentCheckIcon, HomeIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import NotFound from '../NotFound/NotFound';
import 'remixicon/fonts/remixicon.css'
import Save from '../Save/Save';
import { useContext } from 'react';
import { SaveContext } from '../../App';
import Audio from '../Audio/Audio';
import Tafsir from '../Tafsir/Tafsir';
import logo from '../../img/favicon.png';
     

const Header = (props) => {
    const [open, setOpen] = useState(false);
    const [saveData, setSaveData] = useContext(SaveContext)
    return (
                  <div>
             <nav className="flex top-0 fixed w-full z-10 justify-between md:px-[20px] px-3 bg-[#eaf1f4] py-3 items-center">
                 <Link to='/'><img className='w-[50px]' src={logo} alt="" /></Link>
                 <ul className='flex items-center'>
                    <li className='md:block hidden'>
                        <a href='https://github.com/MdNahid360' className='px-1'  target='_blank'>
                             <i className="ri-github-fill text-[26px]"></i>
                        </a>
                    </li>
                    <li className='md:block hidden'>
                        <a href='https://www.linkedin.com/in/nahid-ferdaos/' target='_blank' className='px-3'>
                            <i class="ri-linkedin-box-fill text-[26px] text-blue-600"></i>
                        </a>
                    </li>                    
                 <button onClick={()=> setOpen(!open)} className=' text-gray-900 bg-purple-100 duration-150 hover:bg-purple-200 px-2 py-1 focus:outline-none'>
                    {open ?<XMarkIcon className="w-7 h-7"></XMarkIcon> :  <Bars3Icon className='w-7 h-7  '></Bars3Icon> }
                 </button>
                 </ul>
             </nav>
             <div className="md:flex mt-[63px] relative ">
                 <div className={`menu bg-[#ffffff] border-r overflow-x-hidden overflow-y-scroll md:duration-150 duration-300 ${open ? 'md:w-[0%] w-[99%] ' : 'md:w-[20%] w-[0px]'} h-full md:fixed absolute z-10 left-0`}>
                    <ul className="p-2">
                        <li className="">
                             <NavLink to={`/`} className={ ({ isActive, isPending }) =>
                      isActive
                        ? "flex mt-1 items-center p-2 rounded-xl text-indigo-400 duration-150 bg-indigo-100"
                        : isPending
                        ? "pending"
                        : "flex mt-1 items-center p-2 rounded-xl text-indigo-400 duration-150"
                    }>
                                <div className="w-[33px] h-[33px] flex justify-center mr-2 rounded-lg bg-indigo-200 text-indigo-500 items-center">
                                    <HomeIcon className="w-5"></HomeIcon>
                                </div> 
                                 <span>Home</span>
                             </NavLink>
                        </li>
                         <li  className="  ">
                             <NavLink to="/about" className={ ({ isActive, isPending }) =>
                      isActive
                        ? "flex mt-1 items-center p-2 rounded-xl text-purple-400 duration-150 bg-purple-100"
                        : isPending
                        ? "pending"
                        : "flex mt-1 items-center p-2 rounded-xl text-purple-400 duration-150 "
                    }>
                                <div className="w-[33px] h-[33px] flex justify-center mr-2 rounded-lg bg-purple-200 text-purple-600 items-center">
                                    <ClipboardDocumentCheckIcon className="w-5"></ClipboardDocumentCheckIcon>
                                </div> 
                                 <span>About</span>
                             </NavLink>
                        </li>
                        <li  className=" ">
                             <NavLink to="/tafsir"  className={ ({ isActive, isPending }) =>
                      isActive
                        ? "flex mt-1 items-center p-2 rounded-xl text-green-600 duration-150 bg-green-200"
                        : isPending
                        ? "pending"
                        : "flex mt-1 items-center p-2 rounded-xl text-green-600 duration-150 "
                    }>
                                <div className="w-[33px] h-[33px] flex justify-center mr-2 rounded-lg bg-green-200 text-green-600 items-center">
                                    <ClipboardDocumentCheckIcon className="w-5"></ClipboardDocumentCheckIcon>
                                </div> 
                                 <span>Tafsir</span>
                             </NavLink>
                        </li>
                         <li  className="">
                             <NavLink to="/audio"  className={ ({ isActive, isPending }) =>
                      isActive
                        ? "flex mt-1 items-center p-2 rounded-xl text-orange-400 duration-150 bg-orange-100"
                        : isPending
                        ? "pending"
                        : "flex mt-1 items-center p-2 rounded-xl text-orange-400 duration-150 "
                    }>
                                <div className="w-[33px] h-[33px] flex justify-center mr-2 rounded-lg bg-orange-200 text-orange-600 items-center">
                                    <MusicalNoteIcon className="w-5"></MusicalNoteIcon>
                                </div> 
                                 <span>Audio</span>
                             </NavLink>
                        </li>
                         <li  className=" ">
                             <NavLink to='/save'  className={ ({ isActive, isPending }) =>
                      isActive
                        ? "flex mt-1 items-center p-2 rounded-xl text-red-400 duration-150 bg-red-100"
                        : isPending
                        ? "pending"
                        : "flex mt-1 items-center p-2 rounded-xl text-red-400 duration-150 "
                    }>
                                <div className="w-[33px] h-[33px] flex justify-center mr-2 rounded-lg bg-red-200 text-red-500 items-center">
                                    <BookmarkIcon className="w-5"></BookmarkIcon>
                                </div> 
                                 <span>Save</span>
                             </NavLink>
                           
                        </li>
                    </ul>
                 </div>
                 <div className={`sura-body bg-white duration-150 ${open ? 'md:w-full' : 'md:w-[80%] '} ml-auto`}>
                    <Routes>
                        <Route path="/about" element={<About></About>}></Route>
                        <Route path="/save" element={<Save></Save>}></Route>
                        <Route path="/tafsir" element={<Tafsir></Tafsir>}></Route>
                        <Route path="/audio" element={<Audio></Audio>}></Route>
                        <Route path="/:suraId" element={<SuraDetail></SuraDetail>}></Route>
                        <Route exact path="/" element={<Home save={props.save}></Home>}></Route>
                         <Route path="*" element={<NotFound></NotFound>}></Route>
                    </Routes>
                 </div>
             </div>
        </div>
     );
};

export default Header;