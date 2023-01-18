import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { createContext, useState } from 'react';
export let SaveContext = createContext('n');
function App() {

     let [saveData, setSaveData] = useState([]) ;
    let save = (data) =>{
          saveData.push(data);
      }
  return (
   <SaveContext.Provider value={[saveData, setSaveData]}>
        <div className="App scroll-smooth bg-gray-100">
        <Header save={save}></Header>
    </div>
   </SaveContext.Provider>
  );
}

export default App;
