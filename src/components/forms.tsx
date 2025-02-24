import { Button, CircularProgress, FilledTextFieldProps, IconButton, InputAdornment, OutlinedTextFieldProps, StandardTextFieldProps, TextField, TextFieldVariants } from "@mui/material";
import { IButton, IInputForm, IInputPropAdornment } from "./interface";
import { Visibility, VisibilityOff } from '@mui/icons-material';


export const BootstrapInput = (
    props: JSX.IntrinsicAttributes &
    { variant?: TextFieldVariants | undefined; } &
        Omit<FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps, "variant">) => {
    return <TextField {...props} autoComplete='off' ></TextField>
}


const InputPropAdornment = ({
    handleClick,
    handleMouseDown, optional, position = "end" }: IInputPropAdornment) => (
    <InputAdornment position={position}>
        <IconButton
            aria-label="toggle password visibility"
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            edge={position}
        >
            {optional ? <VisibilityOff /> : <Visibility />}
        </IconButton>
    </InputAdornment>
)

export const InputComponent = ({
    field,
    error,
    label,
    id,
    adornment,
    type = "text",
    handleClick,
    handleMouseDown,
    multiline = false,
    required,
    row = 0
}: IInputForm) => (
    <BootstrapInput
        multiline={multiline}
        required={required}
        size='small'
        rows={row}
        type={type}
        id={id}
        label={label}
        variant="outlined"
        {...field}
        error={Boolean(error)}
        InputProps={adornment ? {
            endAdornment: (
                <InputPropAdornment handleClick={handleClick} handleMouseDown={handleMouseDown} />
            ),
        } : undefined}
    />
)

export const ButtonComponent = ({
    sendingRequest,
    buttonText,
    type = 'button',
    buttonColor = "primary",
    variant = 'contained',
    handleClick
}: IButton) => {
    return (
        <Button
            color={buttonColor}
            type={type}
            onClick={handleClick}
            variant={variant}
            sx={{ width: "100%", minHeight: "40px", textTransform: 'capitalize' }}
            startIcon={
                sendingRequest ? (
                    <CircularProgress size="small" />
                ) : ('')
            }
            disabled={sendingRequest}

        >{sendingRequest ? "Loading!!" : buttonText}</Button>
    )
}