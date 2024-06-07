// src/services/apiService.js
export const getapi = async () => {
    const apiKey = '3d93392545404bf69e688e54ad3d6498' 

    
        const response = await fetch('https://www.haloapi.com/metadata/h5/metadata/campaign-missions/', {
            method: 'GET',
            headers: {
                'Accept-Language': 'en',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': apiKey.trim()
            }
        })
        const data = await response.json()
        return data


        

    } 
    