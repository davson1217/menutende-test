import api from "../api";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    addCategory: build.mutation({
      query: ({ username, category }) => ({
        url: `/add-category/${username}`,
        method: "POST",
        body: { category },
      }),
    }),
    getCategories: build.query({
      query: (username) => `/categories/${username}`,
    }),
    deleteCategory: build.mutation({
      query: ({ username, categoryId }) => ({
        url: `/category/${username}/${categoryId}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
} = categoryApi;
