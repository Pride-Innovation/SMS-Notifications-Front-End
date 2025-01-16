import { Box, Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { VisuallyHiddenInput } from "../styles";
import Helpers from "../utills/helpers";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useNavigate } from "react-router";
import { ROUTES } from "../core/routes";
import ListIcon from '@mui/icons-material/List';

export const FileUploadButton = () => {
    const navigate = useNavigate();
    const { handleFileUpload, sendSMSNotifications } = Helpers();

    return (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
                component="label"
                variant="contained"
                sx={{ mb: 3, minWidthwidth: "10%" }}
                startIcon={<CloudUploadIcon />}
            >
                Upload Loans Due
                <VisuallyHiddenInput
                    onChange={handleFileUpload}
                    accept=".xlsx, .xls, .csv"
                    type="file" />
            </Button>
            <Box
                sx={{ display: "flex", width: "40%", justifyContent: "flex-end" }}
            >
                <Button
                    onClick={sendSMSNotifications}
                    variant="contained"
                    sx={{ mb: 3, minWidthwidth: "50%" }}
                    startIcon={<EmailOutlinedIcon />}
                >Send sms Notifications</Button>
                <Button
                    onClick={() => navigate(ROUTES.SMS_LOGS)}
                    variant="contained"
                    sx={{ mb: 3, minWidthwidth: "40%", ml: "10px" }}
                    startIcon={<ListIcon />}
                >View Logs</Button>
            </Box>
        </Box>
    )
}