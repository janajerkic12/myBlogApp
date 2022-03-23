import Home from './pages/Home';
import { Route, Router, Routes } from "react-router-dom";
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';
import About from './pages/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <div className='max-w-screen-md mx-auto pt-20'>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/articles-list' element={<ArticlesList/>}/>
        <Route path='/article/:name' element={<Article/>}/>        
      </Routes>
      </div></>
  );
}

export default App;
