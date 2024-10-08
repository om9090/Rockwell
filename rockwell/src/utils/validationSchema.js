import yup from 'yup';

export const registerSchema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    role: yup.string().required(),
});

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});