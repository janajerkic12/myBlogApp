import Home from './pages/Home';
import { Route, Router, Routes } from "react-router-dom";
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';
import About from './pages/About';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <div className='max-w-screen-md mx-auto pt-20'>
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/articles-list' element={<ArticlesList/>}/>
        <Route path='/article/hello' element={<Article/>}/>    
        <Route element={<NotFound/>}/>        
      </Routes>
      </div></>
  );
}

export default App;
