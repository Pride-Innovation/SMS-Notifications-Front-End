import * as XLSX from "xlsx";
import { IAuthenticationResponse, ILoanDue, RowData } from "./interfaces";
import React, { useEffect, useState } from "react";
import { LoansContext } from "../context";
import { sendSMSNotificationService } from "./service";
import { jwtDecode } from "jwt-decode";

const Helpers = () => {
    const { setData, data } = React.useContext(LoansContext);
    const [formattedRequest, setFormatedRequest] = useState<Array<ILoanDue>>([])
    const excelSerialToDate = (serial: number): string => {
        const excelBaseDate = new Date(1900, 0, 1);
        excelBaseDate.setDate(excelBaseDate.getDate() + serial - 2);
        return excelBaseDate.toLocaleDateString();
    }

    /*
    const filterAirtelContacts = (loans: Array<ILoanDue>): Array<ILoanDue> => {
        loans = loans.filter(item => {
            let telNumberStr = item.TEL_NUMBER?.toString();
            return telNumberStr?.startsWith("74") || telNumberStr?.startsWith("75") || telNumberStr?.startsWith("70");
        });

        return [...loans, {
            "CUST_ID": "190003546",
            "ACCT_NM": "GLYDES TUSINGWIRE",
            "TEL_NUMBER": "777338787",
            "DUE_DT": "45667",
            "AMT_DUE": 22500
        }];
    };
    */

    function excelDateToJSDate(serial: number) {
        // Excel date system starts at January 1, 1900
        const excelStartDate = new Date(1900, 0, 1);
        const jsDate = new Date(excelStartDate.getTime() + (serial - 2) * 86400000);  // Subtract 2 to adjust for Excel's "start date" offset
        return jsDate;
    }

    function formatDate(date: any) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');  // months are 0-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


    function isStringOfNumbers(str: string) {
        return /^\d+$/.test(str);
    }

    const formatLoanDueDate = (serial: number): any => {
        const jsDate = excelDateToJSDate(serial);
        const formattedDate = formatDate(jsDate);
        return formattedDate;
    }

    const formatData = (): Array<ILoanDue> => {
        const results = data
            .filter(loan => isStringOfNumbers(loan.TEL_NUMBER)) // Filter out invalid TEL_NUMBER
            .map(loan => {
                return {
                    ...loan,
                    DUE_DT: formatLoanDueDate(parseInt(loan.DUE_DT))
                };
            });
        return results;
    }

    useEffect(() => {
        if (data.length > 0) {
            setFormatedRequest(formatData())
        }
    }, [data])

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {

        const files = e.target.files;

        if (files && files[0]) {
            const reader = new FileReader();
            reader.readAsBinaryString(files[0]);
            reader.onload = (event) => {
                const binaryStr = event.target?.result;
                if (binaryStr) {
                    const workbook = XLSX.read(binaryStr, { type: "binary" });
                    const sheetName = workbook.SheetNames[0];
                    const sheet = workbook.Sheets[sheetName];

                    const parsedData = XLSX.utils.sheet_to_json<RowData>(sheet) as unknown as Array<ILoanDue>;

                    if (JSON.stringify(parsedData) !== JSON.stringify(data)) {
                        return setData(parsedData)
                        // return (setData(filterAirtelContacts(parsedData)))
                    }
                }
                return setData([]);
            };
        }
        return setData([])
    };

    const sendSMSNotifications = async () => {
        console.log(formattedRequest, "request data!!!")
        const response = await sendSMSNotificationService({ loansdue: formattedRequest })
        console.log(response, "response within")
    }


    const extractUsername = (email: string) => {
        const regex = /^([^@]+)/;
        const match = email.match(regex);
        return match ? match[0] : null;
    }


    const decodeUserDetails = (token: string | undefined): IAuthenticationResponse | null => {
        if (!token) return null;
        try {
            const decoded = jwtDecode(token);
            return decoded as IAuthenticationResponse;
        } catch (error) {
            return null;
        }
    };

    return (
        { handleFileUpload, excelSerialToDate, sendSMSNotifications, extractUsername, decodeUserDetails }
    )
}

export default Helpers;
