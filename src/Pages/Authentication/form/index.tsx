import {
    Box,
    FormControl,
    FormHelperText,
    Grid
} from '@mui/material'
import { Controller } from 'react-hook-form';
import { IAuthenticationForm } from '../interface';
import { ButtonComponent, InputComponent } from '../../../components/forms';
import { LinkComponent } from '../../../components/TypographyComponent';

const AuthenticationForm = ({
    formState,
    control,
    register,
    buttonText,
    showPassword,
    loggingIn,
    handleClickShowPassword,
    handleMouseDownPassword,
    linkText,
    linkPath,
    password
}: IAuthenticationForm) => {
    return (
        <Grid item container xs={12}
        >
            <Grid item container spacing={3} xs={12}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <Controller
                            control={control}
                            {...register("email")}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <InputComponent required label='Email Address' field={field} error={formState.errors.email} id='email' />
                            )}
                        />
                        {formState.errors.email && (
                            <FormHelperText sx={{ color: 'error.main' }}>{formState.errors.email.message}</FormHelperText>
                        )}
                    </FormControl>
                </Grid>
                {password && <Grid item xs={12}>
                    <FormControl fullWidth>
                        <Controller
                            control={control}
                            {...register("password")}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <InputComponent
                                    required
                                    handleClick={handleClickShowPassword}
                                    handleMouseDown={handleMouseDownPassword}
                                    label='Password'
                                    field={field}
                                    error={formState.errors.password}
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    adornment />
                            )}
                        />
                        {formState.errors.password && (
                            <FormHelperText sx={{ color: 'error.main' }}>{formState.errors.password.message}</FormHelperText>
                        )}
                    </FormControl>
                </Grid>}
                <Grid item xs={12}>
                    <Box sx={{ width: "100%", pb: '10px' }}>
                        <LinkComponent href={linkPath} size='17px' weight={400} text={linkText} />
                    </Box>
                    <ButtonComponent buttonColor='success' type='submit' sendingRequest={loggingIn} buttonText={buttonText} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AuthenticationForm;