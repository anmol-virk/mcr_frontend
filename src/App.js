import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import { useEffect } from 'react';
import Header from './pages/Header';
import { Link } from 'react-router-dom';


function App() {
   const [recipies, setRecipe] = useState([])
   const [search, setSearch] = useState("")

   const REACT_BACKEND = "https://mcr-fs-backend.vercel.app"

 const fetchRecipes = async () => {
    try {
        const response = await axios.get(`${REACT_BACKEND}/recipes`)
        setRecipe(response.data.recipes)
        console.log(response)
    } catch(error){
      console.error("Error", error)
    }
  }
  useEffect(() => {
    fetchRecipes()
}, []);

  const deleteHandle = async (id) => {
    try {
      await axios.delete(`${REACT_BACKEND}/recipes/${id}`);
      setRecipe((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== id));
      console.log("Recipe deleted successfully!")
    } catch (error) {
      console.error("Error deleting recipe:", error);
      console.log("Failed to delete the recipe.");
    }
  }
  const filteredRecipes = recipies.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Header />
    <div className="container py-4">

    <div className="col-md-6 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
     <h1>All Recipies</h1>
     <div className='row'>
      {filteredRecipes.map(recipe => (
        <>
        <div className="card col-md-3 mx-2 my-2" >
  <img src={recipe.imageLink} class="card-img-top" style={{ height: "300px", width: "328px", borderRadius: "5px", marginLeft: "-12px" }} />
  <div key={recipe._id} className="card-body">
    <h5 className="card-title">{recipe.name}</h5>
    <p className="card-text"><strong>Cuisine Type: </strong>{recipe.cuisineType}</p>
    <p className="card-text"><strong>Ingredients: </strong><Link to={`/recipes/${recipe._id}`}>See Recipe </Link></p>
    <p className="card-text"><strong>Instructions:</strong><Link to={`/recipes/${recipe._id}`}>See Recipe </Link></p>
    <button className="btn btn-danger" onClick={() => deleteHandle(recipe._id)}>Delete</button>
  </div>
</div>
        </>
      ))}
    </div>
    </div>
    </>
  );
}

export default App;
