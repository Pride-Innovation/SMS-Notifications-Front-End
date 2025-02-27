import { useContext, useEffect } from "react";
import { DateContext } from "../../context/DateContext";
import dayjs, { Dayjs } from "dayjs";
import { MenuItem } from "@mui/material";
import {
    GridApi,
    GridExportMenuItemProps,
    gridFilteredSortedRowIdsSelector,
    gridVisibleColumnFieldsSelector,
    useGridApiContext
} from "@mui/x-data-grid";
import { exportPDF } from "./pdf";
import { FileContext } from "../../context/FileContext";

const Utills = () => {
    const logsEndpoint = "logs"
    const birthdaysEndpoint = "birthdays"
    const { fileName } = useContext(FileContext);
    const { setEndDate, setStartDate, startDate, endDate } = useContext(DateContext);
    const currentDate = new Date();
    const pastDate = new Date();
    pastDate.setDate(currentDate.getDate() - 30);

    const camelCaseToWords = (camelCaseString: string) => {
        return camelCaseString
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/_/g, ' ')
            .replace(/^./, (str) => str.toUpperCase());
    }

    const cards: {
        "loans": string,
        "birthdays": string
    } = {
        loans: "Loans Due",
        birthdays: "Birthdays"
    }

    const formatDate = (date: Date): Dayjs => {
        return dayjs(date);
    };

    useEffect(() => {
        setEndDate(formatDate(currentDate));
        setStartDate(formatDate(pastDate));
    }, []);

    const determineRowsandColumns = (data: Array<{
        [key: string]: string | number | object | boolean |
        Array<{ [key: string]: string | number | object }>;
    }>) => {
        if (data.length === 0) {
            return { columns: [], rows: [] };
        }

        const columns = Object.keys(data[0])
            .filter(key => key !== 'image' && key !== 'action')
            .map(key => (
                {
                    title: camelCaseToWords(key.charAt(0).toUpperCase() + key.slice(1)),
                    dataKey: key,
                }));

        const rows = data.map(item => {
            return Object.keys(item).reduce((acc, key) => {
                if (key !== 'image' && key !== 'action') {
                    acc[key] = item[key];
                }
                return acc;
            }, {} as { [key: string]: string | number | object | boolean | Array<any> });
        });

        return {
            columns,
            rows
        };
    };

    const generatePDF = (apiRef: React.MutableRefObject<GridApi>) => {
        const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
        const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);

        const data = filteredSortedRowIds.map((id) => {
            const row: Record<string, any> = {};
            visibleColumnsField.forEach((field) => {
                row[field] = apiRef.current.getCellParams(id, field).value;
            });
            return row;
        });

        const { columns, rows } = determineRowsandColumns(data);
        return exportPDF(columns, rows, fileName);
    };

    const JsonExportMenuItem = (props: GridExportMenuItemProps<{}>) => {
        const apiRef = useGridApiContext();

        const { hideMenu } = props;

        return (
            <MenuItem
                onClick={() => {
                    generatePDF(apiRef);
                    hideMenu?.();
                }}
            >
                Download as PDF
            </MenuItem>
        );
    }

    return {
        currentDate: startDate,
        pastDate: endDate,
        cards,
        logsEndpoint,
        birthdaysEndpoint,
        JsonExportMenuItem
    };
}

export default Utills
