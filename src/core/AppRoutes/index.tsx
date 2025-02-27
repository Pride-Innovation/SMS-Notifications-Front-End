import { Route, Routes } from 'react-router'
import { ROUTES } from '../routes'
import Logs from '../../Pages/Logs/loans'
import FileUpload from '../../Pages/FileUpload'
import DashboardLayoutBasic from '../../Pages/Dashboard'
import Login from '../../Pages/Authentication/Login'
import BirthdayLogs from '../../Pages/Logs/birthdays'
import { PrivateRoute } from './PrivateRoute'

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route element={<PrivateRoute />}>
                <Route path={ROUTES.REPORTS} element={<DashboardLayoutBasic />}>
                    <Route index element={<Logs />} />
                    <Route path={ROUTES.BIRTHDAY_REPORTS} element={<BirthdayLogs />} />
                    <Route path={ROUTES.UPLOADS} element={<FileUpload />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes