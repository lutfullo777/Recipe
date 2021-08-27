import React, { useEffect, useState } from 'react';
import Food from './food'
import '../App.css'
import Spinner from './spinner'
import {useSelector} from 'react-redux'

const Foods = () => {
    const MY_ID = '813584d1';
    const MY_KEY = 'aad4d757c4f3a4e1fdd7f45312703076';

    const {loading} = useSelector(state=>state.addBasketRed);

    const getRequest = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${MY_ID}&app_key=${MY_KEY}`);
        const date = await response.json();
        setRecepis(date.hits);
    }

    const [recepi, setRecepis] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        getRequest();
    }, [query]);

    const onchanche = e => {
        setSearch(e.target.value);
    }

    const SearchingFoods = e => {
        e.preventDefault();
        if(search.length>1){
            setQuery(search);
        }
    }
   


    return (
        <div className="foods">
            {loading&&<Spinner/>}
            <form onSubmit={SearchingFoods}>
                <input type="text" onChange={onchanche}
                    placeholder="Enter the desired recipe.Default is chicken" />
                <button type="submit">Search</button>
            </form>
            <div className="foods-recipe">
                {recepi.map((recepi,index) => (
                    <Food recepi={recepi} key={index}/>

                ))}
            </div>
        </div>
    );
}

export default Foods;