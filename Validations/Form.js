import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    Email: yup.string().email("Por favor insira um e-mail válido."),
    Password: yup.string().min(8,({min})=> `A senha deve ter no mínimo ${min} digitos`)
})

export const cadastroValidationSchema = yup.object().shape({
    Email: yup.string().email("Por favor insira um e-mail válido."),
    Password: yup.string().min(8,({min})=> `A senha deve ter no mínimo ${min} digitos`),
    CPF: yup.string().min(11, ({min})=>`Coloque um cpf válido com no mínimo ${min} digitos`)
})

export const resetPasswordValidationSchema= yup.object().shape({
    Email: yup.string().email("Por favor insira um e-mail válido."),
})



