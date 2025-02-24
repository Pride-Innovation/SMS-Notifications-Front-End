import { Box, Grid } from "@mui/material"
import { grey } from "@mui/material/colors"
import { FileUploadButton } from "../../components"
import DataTable from "../../components/DataGrid"

const FileUpload = () => {
    return (
        <Grid container spacing={4} padding={4} mt={4}>
            <Box sx={{ p: 4, bgcolor: grey[200], width: "100%" }}>
                <FileUploadButton />
            </Box>
            <DataTable />
        </Grid>
    )
}

export default FileUpload