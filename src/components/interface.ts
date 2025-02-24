import { FieldError, FieldValues } from 'react-hook-form';

export interface IInputForm {
    field: FieldValues;
    error: FieldError | undefined;
    label: string;
    multiline?: boolean
    type?: string;
    id: string;
    adornment?: boolean;
    required?: boolean
    handleClick?: () => void;
    handleMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    row?: number
}

export interface IInputPropAdornment {
    handleClick?: () => void;
    handleMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void
    optional?: boolean;
    position?: 'start' | 'end';
}

export interface ITypographyComponent {
    weight: number;
    size?: string;
    color?: string
}

export interface ILinkComponent {
    weight: number;
    size?: string;
    text?: string;
    href: string
}

export interface IButton {
    sendingRequest: boolean;
    variant?: "contained" | "outlined"
    buttonText: string;
    buttonColor: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning";
    type?: "button" | "submit" | "reset";
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}