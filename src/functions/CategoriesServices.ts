
interface CategoriesServicesProps{
    url: string;
    method?: "GET" | "DELETE" | "POST";
    body?: any;
    setLoading:React.Dispatch<React.SetStateAction<boolean>>;
}

export class CategoriesServices{
    handlePromise = async({ url, method="GET", body=null, setLoading}:CategoriesServicesProps)=>{
        try{
            setLoading(true)
            const response = await fetch(`https://menutender-testing-597ef11a2ec3.herokuapp.com/api/assessment/${url}`,{
                method,
                body: body ? JSON.stringify(body) : null,
                headers: {
                    "Content-Type": "application/json",
                },
            })
            return await response.json();
        }catch (err: unknown) {
            if (err instanceof Error) {
              throw new Error(err.message);
            } else {
              throw new Error("An unknown error occurred");
            }
        }finally{
            setLoading(false)
        }
    }

    async getCategories(setLoading:React.Dispatch<React.SetStateAction<boolean>>){
        const response = await this.handlePromise({url:"categories/8931", setLoading})
        return response
    }

    async deleteCategories(setLoading:React.Dispatch<React.SetStateAction<boolean>>, id:string){
        const response = await this.handlePromise({url:`category/8931/${id}`, method: 'DELETE', setLoading})
        return response
    }

    async addCategories(setLoading:React.Dispatch<React.SetStateAction<boolean>>, body:{category: string}){
        const response = await this.handlePromise({url:"add-category/8931", method:"POST", setLoading, body})
        return response
    }
}