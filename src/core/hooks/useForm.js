import { useState } from "react"
import { validate } from "../utils/validate"

export const useForm = (rules) => {
    const [form, setForm] = useState({})
    const [error, setError] = useState({})

    const _validate = () => {
        const errorObj = validate(form, rules)

        setError(errorObj)
        return Object.keys(errorObj).length === 0
    }
     
    const register = (name) =>{
        return {
            defaultValue:form[name],
            onChange:(ev) => form[name] = ev.currentTarget.value,
            error: error[name]
        }
    }

    return {
        form,
        setForm,
        setError,
        error,
        register,
        validate: _validate
    }
}