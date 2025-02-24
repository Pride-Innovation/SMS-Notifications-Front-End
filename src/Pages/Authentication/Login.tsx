import {
    Box,
    Grid,
} from '@mui/material';
import {
    useForm
} from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthenticationImage from "../../statics/images/logo.1b6cf8fbdaaee75f39fd.bmp"
import { authentiactionSchema } from './schema';
import { IAuthentication, ILoginResponse, IUser } from './interface';
import { useEffect, useState } from 'react';
import { TypographyComponent } from '../../components/TypographyComponent';
import AuthenticationForm from "./form"
import { findUserByIdService, loginService } from './service';
import { ErrorMessage } from '../../core/axios';
import AuthenticationContainerComponent from '../../components/Container';
import Helpers from '../../utills/helpers';
import AuthenticationUtills from './utils';
import { ROUTES } from '../../core/routes';

const Login = () => {
    const [loggingIn, setLoggingIn] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const defaultUser: IAuthentication = { email: "", password: "" };
    const navigate = useNavigate();
    const { extractUsername, decodeUserDetails } = Helpers()
    const { handleSessionStorage, accessToken } = AuthenticationUtills();
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); };

    const {
        control,
        handleSubmit,
        formState,
        register,
        reset
    } = useForm<IAuthentication>({
        mode: 'onChange',
        resolver: yupResolver(authentiactionSchema)
    });

    useEffect(() => { reset({ ...defaultUser }) }, []);

    const onSubmit = async (formData: IAuthentication) => {
        setLoggingIn(true);
        const username = extractUsername(formData.email)
        const request = {
            username,
            password: formData.password
        }
        try {
            const response = await loginService(request) as unknown as ILoginResponse;
            const data = decodeUserDetails(response.access);
            sessionStorage.setItem(accessToken, response.access)
            const userDetails = await findUserByIdService(data?.user_id as number) as IUser;
            handleSessionStorage(userDetails as IUser, response.access as string)
            toast.success(`Welcome ${userDetails.username}!!`)
            navigate(ROUTES.REPORTS)
        } catch (error) {
            toast.error(ErrorMessage)
        }
        setLoggingIn(false);
    };

    return (
        <AuthenticationContainerComponent >
            <Grid container xs={10} md={6} item>
                <Grid item xs={12} md={6} >
                    <Box component="img" src={AuthenticationImage} alt='Login Image' height={500} width={"100%"} />
                </Grid>
                <Grid item xs={12} md={6} spacing={6} p={4}
                    sx={(theme) => ({
                        bgcolor: theme.palette.background.paper,
                        display: "flex",
                        flexDirection: "column"
                    })}
                >
                    <Box>
                        <TypographyComponent sx={{ mb: 2 }} size={"20px"} weight={600}>Pride Microfinance Notifications App</TypographyComponent>
                        <TypographyComponent sx={{ mb: 2 }} size='16px' weight={500}>Sign In to your account</TypographyComponent>
                    </Box>
                    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
                        <form
                            style={{ width: "100%" }}
                            autoComplete="false"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <AuthenticationForm
                                linkPath=""
                                buttonText="Submit"
                                register={register}
                                formState={formState}
                                control={control}
                                showPassword={showPassword}
                                loggingIn={loggingIn}
                                handleClickShowPassword={handleClickShowPassword}
                                handleMouseDownPassword={handleMouseDownPassword}
                                linkText='Forgot Password?'
                                password
                            />
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </AuthenticationContainerComponent>
    )
}

export default Login;