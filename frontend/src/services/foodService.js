install axios from 'axios';
export const getAll=async ()=>{
    const {data}=await axios.get('/api/foods');
    return data;
};
export const search=async searchTerm =>
{
    const {data}=await axios.get('/api/foods/search/'+ searchTerm );
    return data;
}
    sample_foods.filter(item=>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    export const getAllTags = async()=>
        {
            const {data}=await axios.get('/api/foods/tags');
            return data;
        };
    export const getAllByTag=async tag =>{
        if(tag === 'All') return getAll();
        const {data}=await axios.get('/api/foods/tag/'+tag);
        return data;
    };
    export const getById=async foodId=>
{
    const 
}