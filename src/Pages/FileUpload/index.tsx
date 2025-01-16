import { Box } from "@mui/material"
import { grey } from "@mui/material/colors"
import { FileUploadButton } from "../../components"
import DataTable from "../../components/DataGrid"

const FileUpload = () => {
    return (
        <Box sx={{ p: 6, bgcolor: grey[200], height: "100vh" }}>
            <FileUploadButton />
            <DataTable />
        </Box>
    )
}

export default FileUpload