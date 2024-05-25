import {useState} from  'react'

export const useForm = (initialState = {}) => {


    const [Values , Setvalues] =  useState(initialState)

    const handleInputChange = ({target}) =>{
        Setvalues({
            ...Values,
            [target.name]:target.value
        })
    }
    
    const reset = () => {
        Setvalues(initialState)
    }

return [Values,handleInputChange,reset]
}




