import * as yup from 'yup';

export const authentiactionSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email Address is required')
        .email("Invalid Email Address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@pridemicrofinance\.co\.ug$/,
            "Email is not a valid Pride Email Address"
        ),
    password: yup.string().required('Password is required'),
});
