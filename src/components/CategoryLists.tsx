import React, {useEffect, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { View, setCategories, setView } from '../redux/states/appState';
import { RootState } from '../redux/store';
import { MdOutlineCancel } from "react-icons/md";

type Response = {
    success: boolean;
    categories: object[];
}

interface Category{
    id: string;
    category: string;
}

const CategoryLists = () => {
    const dispatch = useDispatch();

    const categories = useSelector((state:RootState)=>state.app.categories) as Category[]

    const fetchCategoryLists = useCallback(async () =>{
        const response = await fetch('https://menutender-testing-597ef11a2ec3.herokuapp.com/api/assessment/categories/8931');
        const res:Response = await response.json()
        if(res.success){
            dispatch(setCategories(res.categories))
        }
    },[dispatch])

    useEffect(()=>{
        fetchCategoryLists();
    },[]);


    const navigateToAddCategories = () =>{
        dispatch(setView({view: View.CategoryAdd}))
    }

    const handleCategoryDeletion = async (id:string) =>{
        try{
            await fetch(`https://menutender-testing-597ef11a2ec3.herokuapp.com/api/assessment/category/8931/${id}`,{
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((data)=>data.json())
            .then((response)=>{
                if(response.success){
                    fetchCategoryLists()
                }
            })

        }catch(err: unknown) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error("An unknown error occurred");
            }
        }
    }
  return (
    <div>
        {
            categories.length > 0 ?
            categories.map((category:Category)=>(
                <div key={category.id}>
                    <p>{category.category}</p>
                    <MdOutlineCancel onClick={()=>handleCategoryDeletion(category.id)}/>
                </div>
            ))
            :
            <>
                <p>No new categories to display</p>
            </>
        }
        <button onClick={navigateToAddCategories}>Add New</button>
    </div>
  )
}

export default CategoryLists;