// import Routes, Route from react-router-dom library -- provide query search/url endpoints
import { Routes, Route } from 'react-router-dom';

import './App.css'

// import CSS styling
import './style.css';

// essentially pages
import GetAllStarships from './services/sw-api.jsx';

// import Nav component
import Nav from "./components/Nav.jsx";

// root functional component App()
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      {/* Routes container full of Route */}
      <Routes>
        {/* Duly Noted: "element" attribute takes in NOT a fn rather a React functional component? */}
        {/* Pascal-Casing convention for React components (Capitalized): https://stackoverflow.com/questions/57981913/warning-view-is-using-incorrect-casing-use-pascalcase-for-react-components */}
        <Route path='/' element={<GetAllStarships />} />
        {/* <Route path='/' element={} />
        <Route path='/' element={} /> */}
      </Routes>
    </>
  )
}

export default App
