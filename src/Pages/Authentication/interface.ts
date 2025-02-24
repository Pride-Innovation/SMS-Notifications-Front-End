import { Control, FieldError, FormState, UseFormRegister } from "react-hook-form";
// import { IUser } from "../users/interface";
// import { IPermission, IRole } from "../settings/interface";

export interface IUser {
    id: string | number,
    username: string,
    email: string,
    first_name: string,
    last_name: string
}

export interface IRole {
    id?: string | number;
    name: string;
    permissions?: Array<number>;
}

export interface IPermission {
    id?: number | string;
    name: string;
    guard_name?: string;
}

export interface IAuthentication {
    email: string;
    password: string;
}

export interface IAuthenticationForm {
    formState: FormState<IAuthentication> & {
        errors: {
            email?: FieldError;
            password?: FieldError;
        };
    };
    control: Control<IAuthentication>;
    register: UseFormRegister<IAuthentication>;
    buttonText: string;
    showPassword: boolean;
    loggingIn: boolean;
    handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleClickShowPassword: () => void;
    linkText?: string
    linkPath: string
    password?: boolean
}

export interface ILoginResponse {
    refresh: string;
    access: string
}

export interface IUserProfileResponse {
    status: "success" | "failed",
    data: {
        user: IUser;
        roles: Array<IRole>;
        permissions: Array<IPermission>
    } | null
}
