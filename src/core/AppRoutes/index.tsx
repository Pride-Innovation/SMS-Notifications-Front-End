import { Route, Routes } from 'react-router'
import { ROUTES } from '../routes'
import Logs from '../../Pages/Logs'
import FileUpload from '../../Pages/FileUpload'

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<FileUpload />} />
            <Route path={ROUTES.SMS_LOGS} element={<Logs />} />
        </Routes>
    )
}

export default AppRoutes