import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

const RecipeDetails = () => {
    const {id} = useParams()
    console.log(id)
    const [recipe, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true)

  const fetchRecipeDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/recipes/${id}`);
      setRecipes(response.data.recipe);
      console.log(response)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [id]);
  
  return(
    <div className="container py-4">
        <h1>{recipe.name}</h1>
   <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={recipe.imageLink} class="img-fluid rounded-start" style={{ height: "420px", width: "400px", borderRadius: "5px" }} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title">Cuisine: {recipe.cuisineType}</h2>
        <h3>Ingredients: </h3>
            <p>{recipe.ingredients}</p>
        <h3>Instructions:</h3>
       <p>{recipe.instructions}</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )

}

export default RecipeDetails