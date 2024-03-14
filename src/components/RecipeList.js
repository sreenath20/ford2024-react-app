import { recipes } from '../resources/data.js' 

function ItemList({ingredients}){
  return(
    <ol>
    {ingredients.map((ing,index)=><li key={index}>{ing}</li>)}
    </ol>
  );
}
export default function RecipeList() {
    console.log(recipes);
    
  return (
    <div>
      <h1>Recipes</h1>
      {
        recipes.map((recipe,index)=>
          <>
            <h2>{recipe.name}</h2>
            <ItemList key={index} ingredients = {recipe.ingredients}></ItemList>
          </>)
      }
    </div>
  );
}
