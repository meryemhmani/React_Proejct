import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@mui/material"; // Ajout de l'import Button
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
// import img from '../../../public/images'
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Ajout des imports pour ThemeProvider et createTheme
import MUIDataTable from "mui-datatables";

function ListArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/produits")
      .then((response) => setArticles(response.data));
  }, []);

  const deleteProd = async (id) => {
    if (!window.confirm("Are you sure you want to delete")) {
      return;
    }

    axios.delete('http://localhost:3001/produits/' + id)
      .then(() => {
        toast('🦄 successfully deleted  ', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setArticles(prevArticles => prevArticles.filter((article) => article.id !== id));
      }).catch((error) => {
        console.log(error)
      })
  }

  const columns = [
    {
      label: "Référence",
      name: "reference"
    },
    {
      label: "Titre",
      name: "titre"
    },
    {
      label: "Image",
      name: "imageartpetitf",
      options: {
        customBodyRender: (imageartpetitf) => (
          <img
            style={({ height: 200 })}
            src={imageartpetitf} alt="Photo d'un Livre" />
        )
      }
    },
    {
      label: "Modification",
      name: "id",
      options: {
        customBodyRender: (id) => (
          <Button variant="contained" color="primary" size="Medium" ><Link to={`/edit/${id}`} style={{ color: "white" }}>Modifier</Link></Button>
        )
      }
    },
    {
      label: "suppression",
      name: "id",
      options: {
        customBodyRender: (id) => (
          <Button variant="contained" color="secondary" size="Medium" onClick={() => { deleteProd(id) }}>Supprimer</Button>
        )
      }
    }
  ];

  return (
    <>
      <ThemeProvider theme={createTheme()}>
        <MUIDataTable
          title="Liste des articles"
          data={articles} // Utilisation de la variable d'état 'articles'
          columns={columns}
        />
      </ThemeProvider>
    </>
  );
}

export default ListArticles;
