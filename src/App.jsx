import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Parts from './components/Parts'
import List from './components/List'

function App() {
 
  return (

    <div>
      <Routes>
        <Route path="/" element={<Parts />}/>
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  )
}

export default App

// import { useState } from 'react'
// import './App.css'
// import { Route, Routes } from 'react-router-dom'
// import Parts from './components/Parts'
// import List from './components/List'

// function App() {
//   const [dataFromFirebase, setDataFromFirebase] = useState([]);

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Parts setDataFromFirebase={setDataFromFirebase} />} />
//         <Route path="/list" element={<List dataFromFirebase={dataFromFirebase} />} />
//       </Routes>
//     </div>
//   )
// }

// export default App

