export type RowData = {
    [key: string]: any;
};

export interface ILoanDue {
    CUST_ID: string;
    ACCT_NM: string;
    TEL_NUMBER: string;
    DUE_DT: string;
    AMT_DUE: number;
}