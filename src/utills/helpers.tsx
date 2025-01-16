import * as XLSX from "xlsx";
import { ILoanDue, RowData } from "./interfaces";
import React from "react";
import { LoansContext } from "../context";
import { sendSMSNotificationService } from "./service";


const Helpers = () => {
    const { setData, data } = React.useContext(LoansContext);

    const excelSerialToDate = (serial: number): string => {
        const excelBaseDate = new Date(1900, 0, 1);
        excelBaseDate.setDate(excelBaseDate.getDate() + serial - 2);
        return excelBaseDate.toLocaleDateString();
    }

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
        const response = await sendSMSNotificationService({ loansdue: data })
        console.log(response, "response within")
    }

    return (
        { handleFileUpload, excelSerialToDate, sendSMSNotifications }
    )
}

export default Helpers;
