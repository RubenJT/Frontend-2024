// src/services/apiService.js
export const getapiVehicules = async () => {
    const apiKey = '3d93392545404bf69e688e54ad3d6498' 

    
        const response2 = await fetch('https://www.haloapi.com/metadata/h5/metadata/vehicles/', {
            method: 'GET',
            headers: {
                'Accept-Language': 'en',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': apiKey.trim()
            }
        })
        const data2 = await response2.json()
        return data2


        

    } 
    