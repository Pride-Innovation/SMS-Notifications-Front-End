import { ROUTES } from "../../core/routes";
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

interface IRoute {
    id: number;
    name: string;
    path: string;
    icon: JSX.Element;
}

export const routes: Array<IRoute> = [
    {
        id: 1,
        name: "Dashboard",
        path: ROUTES.REPORTS,
        icon: <AssessmentOutlinedIcon />
    },
    {
        id: 2,
        name: "Uploads",
        path: ROUTES.UPLOADS,
        icon: <DriveFolderUploadOutlinedIcon />
    },
];