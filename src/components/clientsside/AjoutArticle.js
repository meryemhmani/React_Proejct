import { useState, useRef } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function AjoutArticle() {
  const navigate = useNavigate();
  const [reference, setReference] = useState("");
  const [designation, setDesignation] = useState("");
  const [marque, setMarque] = useState("");
  const [prixAchat, setPrixAchat] = useState("");
  const [prixVente, setPrixVente] = useState("");
  const [qtestock, setQtestock] = useState("");
  const [imageartpetitf, setImageartpetitf] = useState("");
  const fileInputRef = useRef(null);

  const onselectFile = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      reference,
      designation,
      marque,
      prixAchat,
      prixVente,
      qtestock,
      imageartpetitf
    };

    axios.post("http://localhost:3001/produits", newProduct)
      .then(res => {
        console.log(res);
        toast.success('🦄  insertion  effectuée', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate('/');
      })
      .catch(error => {
        toast.error('🦄 erreur insertion non effectuée', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

 
            return ( 
            
                <div className="container">
                <h2>Ajout d'un produit </h2>
                <form onSubmit={handleSubmit}>
            <div className="grid gap-3">
            <div className="col-sm-5 p-2 g-col-6">
                <input className="form-control"
                placeholder="Référence"
                type="text"
                value={reference}
                onChange={e => setReference(e.target.value)}
                />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
                <input className="form-control"
                placeholder="Désignation"
                name="designation"
                type="text"
                value={designation}
                onChange={e => setDesignation(e.target.value)}
                />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
                <input className="form-control"
                placeholder="Marque"
                type="text"
                value={marque}
                onChange={e => setMarque(e.target.value)}
                />
            </div>
       
            <div className="col-sm-5 p-2 g-col-6">
                <input className="form-control"
                placeholder="Prix Achat"
                type="number"
                value={prixAchat}
                onChange={e => setPrixAchat(e.target.value)}
                />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
                <input className="form-control"
                placeholder="Prix Vente"
                name="prixVente"
                type="number"
                value={prixVente}
                onChange={e => setPrixVente(e.target.value)}
                />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
                <input className="form-control"
                placeholder="Quantité"
                type="number"
                value={qtestock}
                onChange={e => setQtestock(e.target.value)}
                />
            </div>
            <div className="col-sm-5 p-2 g-col-6">
            <input className="form-control"
                placeholder="Image"
                type="text"
                value={imageartpetitf}
                onChange={e => setImageartpetitf(e.target.value)}
                />
            </div>    
            <div>{imageartpetitf ?<img src={imageartpetitf} alt="" width="70"/>:null}</div> 
            <div>
            <button className="btn btn-success">Valider</button>
            </div>  
            </div>
            </form>
        
        </div>

            



                );
        }

export default AjoutArticle;
