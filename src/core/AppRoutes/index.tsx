import { Route, Routes } from 'react-router'
import { ROUTES } from '../routes'
import Logs from '../../Pages/Logs'
import FileUpload from '../../Pages/FileUpload'
import DashboardLayoutBasic from '../../Pages/Dashboard'
import Login from '../../Pages/Authentication/Login'

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path={ROUTES.REPORTS} element={<DashboardLayoutBasic />}>
                <Route index element={<Logs />} />
                <Route path={ROUTES.UPLOADS} element={<FileUpload />} />
            </Route>

        </Routes>
    )
}

export default AppRoutes