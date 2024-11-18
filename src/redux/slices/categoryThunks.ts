import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://menutender-testing-597ef11a2ec3.herokuapp.com/api/assessment/';
const username = 'caleb-8922';


export const fetchCategories = createAsyncThunk('categories/fetch', async () => {
  const response = await fetch(`${baseUrl}categories/${username}`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  const data = await response.json();
  return data;
});




export const addCategory = createAsyncThunk('categories/add', async (category: string) => {
  const response = await fetch(`${baseUrl}add-category/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category }),
  });
  if (!response.ok) {
    throw new Error('Failed to add category');
  }
  const data = await response.json();
  return data;
});


export const deleteCategory = createAsyncThunk('categories/delete', async (categoryId: string) => {
  const response = await fetch(`${baseUrl}category/${username}/${categoryId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete category');
  }
  return categoryId;
});

