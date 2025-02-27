import { GridPaginationModel } from "@mui/x-data-grid";
import { IBirthdayLog, ICustomTablePagination, ILogs, ILogsResponse } from "./interface";
import { useContext } from "react";
import { fetchLogsService } from "../FileUpload/service";
import { PageContext } from "../../context/PageContext";
import Utills from "./utills";

const CustomTablePagination = ({ start, end, endpoint }: ICustomTablePagination) => {

    const {
        setPage,
        setPageSize,
        setLogs,
        setCount,
        setBirthdayLogs,
        setBirthdayCount,
    } = useContext(PageContext);
    const { logsEndpoint } = Utills()

    const handleTablePagination = async (model: GridPaginationModel) => {

        setPage(model.page + 1);
        setPageSize(model.pageSize);

        try {
            const response = await fetchLogsService(
                start,
                end,
                model.pageSize,
                model.page + 1,
                endpoint
            ) as ILogsResponse;

            // setCount(response.count)

            endpoint === logsEndpoint ?  setCount(response.count)
                : setBirthdayCount(response.count)
                
            endpoint === logsEndpoint ? setLogs(response.results.logs as ILogs[])
                : setBirthdayLogs(response.results.logs as IBirthdayLog[])

        } catch (error) {
            console.log(error)
        }

    }
    return (
        { handleTablePagination }
    )
}

export default CustomTablePagination;