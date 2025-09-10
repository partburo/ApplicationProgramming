// 1_7_3 Extracting a list item component 
/*
  Этот компонент RecipeList содержит два вложенных вызова map. Чтобы упростить его, извлеките из него компонент Recipe, который будет принимать пропсы id, name и ingredients. Где вы разместите внешний key и почему?.
*/

import { recipes } from './data';

function Recipe({id, name, ingredients}: {id: string; name: string; ingredients: string[]}) {
    return(
        <div key={id}>
            <h2>{name}</h2>
            <ul>
                {ingredients.map((ingredient) =>(
                    <li>{ingredient}</li>
                ))}
            </ul>
        </div>
    )
}

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map((recipe) => (
                <Recipe
                    id={recipe.id}
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                />
            ))}
        </div>
    );
}