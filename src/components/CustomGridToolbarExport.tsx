import { ButtonProps, Stack } from "@mui/material";
import {
    GridCsvExportMenuItem,
    GridCsvExportOptions,
    GridToolbarContainer,
    GridToolbarExportContainer
} from "@mui/x-data-grid";
import Utills from "../Pages/Logs/utills";
import { TypographyComponent } from "./TypographyComponent";

const CustomGridToolbarExport = (props: ButtonProps) => {
    const csvOptions: GridCsvExportOptions = {};
    const { JsonExportMenuItem } = Utills();

    return (
        <GridToolbarExportContainer {...props}>
            <GridCsvExportMenuItem options={csvOptions} />
            <JsonExportMenuItem />
        </GridToolbarExportContainer>
    );
};

function CustomToolbar({ title = "Messages Report" }: { title?: string }) {
    return (
        <GridToolbarContainer sx={{ width: '100%', display: 'flex', p: '20px', bgcolor: "#EEEEEE" }}>
            <TypographyComponent size='14px' weight={400} sx={{ textTransform: "uppercase" }}>
                {title}
            </TypographyComponent>
            <Stack direction="row" spacing={2} sx={{ ml: "auto" }}>
                <CustomGridToolbarExport />
            </Stack>
        </GridToolbarContainer>
    );
}

export default CustomToolbar;
