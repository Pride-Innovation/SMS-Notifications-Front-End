export type RowData = {
    [key: string]: any;
};

export interface ILoanDue {
    CUST_ID: string;
    CUST_NM: string;
    TEL_NUMBER: string;
    DUE_DT: string;
    AMT_DUE: number;
}

export interface IAuthenticationResponse {
    token_type: string,
    exp: number,
    iat: number,
    jti: string,
    user_id: number
}