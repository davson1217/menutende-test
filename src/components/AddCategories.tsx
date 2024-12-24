import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { View, setView } from '../redux/states/appState';
import { IoArrowBackSharp } from "react-icons/io5";
import './style.css';
import Button from './reuseables/Button';
import { CategoriesServices } from '../functions/CategoriesServices';

const AddCategories = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);

    const categoriesServices = new CategoriesServices();

    const addCategories = async()=>{
        const response = await categoriesServices.addCategories(setLoading, { category: inputValue })
        if(response.success){
            dispatch(setView({view: View.CategoryList}))
        }
    }

    const handleBackClick = () =>{
        dispatch(setView({view: View.CategoryList}))
    }

  return (
    <div className='add_categories_container'>
        <div className='back_button' onClick={handleBackClick}>
            <IoArrowBackSharp />
            <span>Back</span>
        </div>
        <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <Button onClick={addCategories} title={loading ? 'Loading...' : 'Add Category'} variant='white_bg_button'/>
    </div>
  )
}

export default AddCategories