import { Dayjs } from "dayjs";

interface ILogs {
    id?: string | number;
    phone_number: string;
    account_name: string;
    status: string;
    created_at: string;
    response_data: {
        error: string;
    };
    due_date: string;
    amount_due: string | number;
}

interface IResults {
    count: number;
    logs: Array<ILogs>;

}

interface ILogsResponse {
    count: number;
    next?: string;
    previous?: string;
    results: IResults;
    pagination: {
        total_pages: number,
        current_page: number,
        per_page: number,
        total_records: number
    }
}

interface IRequestBody {
    currentDate: string;
    pastDate: string;
}

interface ICustomTablePagination {
    start: string;
    end: string
}

interface IParentComponent {
    startDate: Dayjs | null;
    endDate: Dayjs | null;
    handleStartDateChange: (date: Dayjs | null) => void;
    handleEndDateChange: (date: Dayjs | null) => void;
}

export type { ILogs, ILogsResponse, IRequestBody, IParentComponent, ICustomTablePagination };
