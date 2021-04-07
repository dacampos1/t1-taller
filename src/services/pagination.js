async function apiCallPagination(string, offset, previousResponse) {
    const url = 'https://tarea-1-breaking-bad.herokuapp.com/api/characters?name='+string+'&offset=' + offset;
    return await fetch(url, {
      method: 'GET', 
    })
    .then(response => response.json())
    .then(newResponse => {
      const response = [...previousResponse, ...newResponse]; 
      if (newResponse.length !== 0) {
        offset+=10;
        return apiCallPagination(string, offset, response);
      }
  
      return response;
    });
    }
  
  
  export default  apiCallPagination; 