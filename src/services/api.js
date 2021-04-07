
async function apiCall(string) {
    const url = 'https://tarea-1-breaking-bad.herokuapp.com/api/'+string;
    const response =await fetch(url, {
      method: 'GET', 
    })
    const data= await response.json()
    return data};


export default  apiCall; 

