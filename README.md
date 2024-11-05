## Introduction

Hello and thank you for applying to our Frontend Developer position.

Menutender is a digital solution targeting the
hospitality industry. One of the platforms we offer to businesses in the hospitality space includes a Content Management
System which allows a business to create a group of products under one category among many other solutions.

We will assess your skill with a basic task similar to the categorized product solution we have just mentioned.

## Task

In this task we will not bother you with the complexities of creating an actual product, however, you will

- Make api requests to our server to retrieve list of existing categories and render them on the UI.
- Create a UI to add a new category.
- And implement category deletion.

### UI

You should implement the following mock-ups into user interfaces

1. #### Empty Category UI

   ![img_1.png](public/no_category.png)

2. ##### Add Category UI

   ![img_1.png](public/add_category.png)

3. ##### Category List UI

![img_1.png](public/category_list.png)

## API

1. Make API requests to our server on the following address:
   https://menutender-testing-597ef11a2ec3.herokuapp.com/api/assessment/
2. Please note that the server is open to the following methods and endpoints
   1. POST `add-category/your-username` to add a new category.
   2. GET `categories/your-username` to retrieve a list of all categories.
   3. DELETE `category/your-username/categoryId` to delete a category.
3. Your POST request to the server should have the following schema
   {
   category: string
   }

## Notes

1. We have created a boilerplate code for you in the project.
2. Redux plays crucial role in our various projects, so we expect you to utilize it.
3. Feel free to design the given mock-up as you please (speaking of aesthetics).
4. When you are done and are ready to submit your work
   1. create a local branch bearing your username.
   2. Push your work to your remote branch and create a pull request.
5. Your username is your first name with a suffix of your candidate number.
   For example, John-1311. Please adhere to this format.
6. Note that failure to successfully execute the step 4 and 5 above may result to your work not being assessed.

# Good Luck! :)
