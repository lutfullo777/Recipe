import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getBasket} from '../redux/actions'
import BasketItem from './basketItem'
import Spinner from './spinner'

function Basket() {
    const dispatch = useDispatch()

    const { loading, basket} = useSelector(state=>state.getBasketRed)

    
    useEffect(()=>{
        dispatch(getBasket())
    },[dispatch])


    return (
        <div className="foods">
            {loading&&<Spinner/>}
            <div className="foods-recipe">
                {basket && basket.map((recepi,index) => (
                    <BasketItem recepi={recepi} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Basket
