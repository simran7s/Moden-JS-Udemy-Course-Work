/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author Simran Sandhu
 * @license MIT
 *
 **/

class EasyHTTP {
    // Make HTTP GET REQUEST 
    async get(url) {
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
    }


    // Make an HTTP POST request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
    }

    //Make an HTTP put request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;

    }

    // Make an HTTP delete request
    async delete(url) {
        const response = fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const resData = await 'Resource Deleted...';
        return resData;
    }

}


export const http = new EasyHTTP();