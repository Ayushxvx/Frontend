import NavBar from './NavBar.jsx'
import {Routes,Route} from 'react-router-dom';
import MainEle from './mainEle.jsx';
import AddPost from './AddPost.jsx';
function App(){
  return(
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<MainEle/>} />
    <Route path="/addpost" element={<AddPost />} />
    </Routes>
    </>
  )
}

export default App;