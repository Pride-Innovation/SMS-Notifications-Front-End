import { GridPaginationModel } from "@mui/x-data-grid";
import { ICustomTablePagination, ILogsResponse } from "./interface";
import { useContext } from "react";
import { fetchLogsService } from "../FileUpload/service";
import { PageContext } from "../../context/PageContext";

const CustomTablePagination = ({ start, end }: ICustomTablePagination) => {

    const { setPage, setPageSize, setLogs, setCount } = useContext(PageContext);

    const handleTablePagination = async (model: GridPaginationModel) => {

        setPage(model.page + 1);
        setPageSize(model.pageSize);

        try {
            const response = await fetchLogsService(start, end, model.pageSize, model.page + 1) as ILogsResponse;
            setCount(response.count)
            setLogs(response.results.logs)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        { handleTablePagination }
    )
}

export default CustomTablePagination;