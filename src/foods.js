import React,{useEffect,useState} from 'react';
import './App.css'

const App=()=>{
    const MY_ID='813584d1';
    const MY_KEY='aad4d757c4f3a4e1fdd7f45312703076';

    
    const getRequest=async()=>{
        const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${MY_ID}&app_key=${MY_KEY}`);
        const date=await response.json();
        setRecepis(date.hits);
    }
    
    const [recepi,setRecepis]=useState([]);
    const [search,setSearch]=useState('');
    const [query,setQuery]=useState("chicken");
    
    useEffect(()=>{
        getRequest();
    },[query]);

    const onchanche=e=>{
        setSearch(e.target.value);
    }

    const SearchingFoods=e=>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    

    return(
        <div className="foods">
            <form onSubmit={SearchingFoods}>
                <input type="text" onChange={onchanche} 
                placeholder="enter the desired recipe"/>
                <button type="submit">Search</button>
                <h1></h1>
            </form>
            <div className="foods-recipe">
            {recepi.map(recepi=>(
                <div key={recepi.recipe.label} className="food-recipe">
                    <h1>{recepi.recipe.label}</h1>
                    <p><b>Calories: {recepi.recipe.calories}</b></p>
                    <p><b>Recipe</b></p>
                    <ol> 
                        {recepi.recipe.ingredients.map(ingredient=>(
                            <li key={ingredient.id}>{ingredient.text}</li>
                        ))}
                    </ol>
                    <img src={recepi.recipe.image} alt=""/>
                </div>
                
            ))}
            </div>
        </div>
    );
}

export default App;