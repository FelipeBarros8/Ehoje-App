import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    Email: yup.string().email("Por favor insira um e-mail válido."),
    Password: yup.string().min(8,({min})=> `A senha deve ter no mínimo ${min} digitos`)
})