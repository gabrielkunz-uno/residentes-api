const local = "http://127.0.0.1:3001"
const local_api = `${local}/api/v1`

// VALIDATE LOGIN

function validateLogin() {
    if (!(localStorage.getItem("token") === " ")) {
        window.location.replace(`login`)
    }
}

export default {
    // GETS
    getAll: async (request) => {
        return await fetch(`${local_api}/${request}`)
            .then(response => response.json())
            .then(data => {return data})
    },


    getById: async (request, id) => {
        return await fetch(`${local_api}/${request}/${id}`)
            .then(response => response.json())
            .then(data => {return data}) 
    }, 

    // POST 
    postMethod: async (request, json) => {
    try { 
        return await fetch(`${local_api}/${request}`,{

            method: 'POST',
            body: JSON.stringify(json),
            headers: { "Content-Type" : "application/json"}
        }) 
    } catch(err) { 
        console.error(`Error at fetch: ${err}`);
        throw err; } 
    },


    // PUT
    putMethod: async (request, id, json) => {
        try {
            return await fetch(`${local_api}/${request}/${id}`,{
                method: 'PUT',
                body: JSON.stringify(json),
                headers: { "Content-Type" : "application/json" }
            })
        } catch(err) {
            console.error(`Error at fetch: ${err}`); 
            throw err; 
        } 
    }, 


    // DELETE 
    deleteMethod: async (request, id) => {
        return await fetch(`${local_api}/${request}/${id}`, {
            method: 'DELETE'
        })
    },


    // LOGIN
    login: async (email, password) => {
        fetch(`${local}/login`,{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({email: email, password: password})
            })
        .then((res) => res.json())
        .then((data) => localStorage.setItem("token", data.token))
    },
    
    deleteRes: async (request, id) => {
        console.log(id)
        fetch(`${local_api}/${request}/${id}`, {
            method: 'DELETE'
        })
    }
}