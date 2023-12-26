import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import ListArt from './components/clientsside/ListArticles';
import AjoutArt from './components/clientsside/AjoutArticle';
import EditArticle from './components/clientsside/EditArticle';
import Menu from './Menu';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ListCards from './components/clientsside/ListCards';
import Cart from "./components/clientsside/Cart";

import { CartProvider } from "use-shopping-cart";
import PdfCart from './components/clientsside/PDFCart';

import Loginclient from './components/clientsside/loginClient';




function App() {
 
    
    
    return(
        
       
    <CartProvider>

            <Router>
              <Menu />
              <searchBar/>
          <Routes>
            <Route path='/' element={<ListCards/>}/>
            <Route path='/editArticle/:id' element={<EditArticle/>}/>
           
            <Route path='/addArticle' element={<AjoutArt/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="/loginclient" exact element={<Loginclient/>}/>
            
            <Route path='/pdfCart' element={<PdfCart/>}/>

                    <Route path='/articles' element={<ListArt/>}/>
    
          </Routes>
          
          </Router>
    <ToastContainer/>
    
       
    </CartProvider> 

      );
    
    
    }
    
 
export default App;
