import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { View, setView } from '../redux/states/appState';
import { IoArrowBackSharp } from "react-icons/io5";
import './style.css';

const AddCategories = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const addCategories = async()=>{
        try{
            const response = await fetch('https://menutender-testing-597ef11a2ec3.herokuapp.com/api/assessment/add-category/8931',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ category: inputValue })
            });
            const data = await response.json();
            if(data.success){
                dispatch(setView({view: View.CategoryList}))
            }
        }catch(err: unknown) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("An unknown error occurred");
            }
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
        <button onClick={addCategories}>Add Category</button>
    </div>
  )
}

export default AddCategories