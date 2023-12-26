import { useShoppingCart} from 'use-shopping-cart';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link}  from 'react-router-dom';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ElementsArticleCard= (props)=> {
        const { cartCount,addItem } = useShoppingCart();
     
      const addToCart = (product) => {
          
        const target = { 
        id : product.id,
        title : product.designation,
        image : product.imageartpetitf,
        price : product.prixVente,
        qtestock : product.qtestock,
        quantity : 1
        };
        addItem(target);
        console.log('Item added to cart:', target);
       toast.success('🦄  ajout   effectuée', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      };
    
 
             return ( 
              <>

  <AppBar position="static" color='default'>
                <Toolbar>
                    <Button color="inherit"><Link to="/cart">{ cartCount}<ShoppingCartIcon fontSize="large" /></Link></Button>
                </Toolbar>
  </AppBar>


      <div className="row">
                {props.articles && props.articles.map((product) => (
                  
                  <article className="col-sm-3" key={product.id}>
      <div className="card">
        <img
          src={product.imageartpetitf}
          className="card-img-top p-5"
          alt={product.designation}
        />
      </div>
      <div className="text-center">
     <div>{product.designation} ... </div>
     <div>Prix : {product.prixVente} TND </div>
     </div>
      <div className="text-center">
      <button
  disabled={product.qtestock <= 1}
  className="btn btn-warning"
  onClick={() => addToCart(product)}>
  Add to Cart
</button>

    
      </div>
    </article>
                 
                ))}
              </div>
              </>
         
           );
    }
    
    export default ElementsArticleCard;
    