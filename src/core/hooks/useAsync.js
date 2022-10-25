import { useState } from "react"

 export const useAsync = (promise) =>{
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    const excute = async (...rest) => {
        try{
            setLoading(true)
            const res = await promise(...rest)
            return res
        }
        catch(err){
            setError(err.message || err.error)
            throw err
        }finally{
            setLoading(false)
        }
    }
    return {
        excute,
        loading, 
        error
    }
 }