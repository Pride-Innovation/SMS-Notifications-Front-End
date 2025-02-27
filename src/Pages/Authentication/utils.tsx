const AuthenticationUtills = () => {
    const accessToken: string = 'access-token';
    const currentUser: string = 'current-user';

    const getCurrentUser = () => {
        return JSON.parse(sessionStorage.getItem(currentUser) || '{}');
    }

    const isAuthenticated = () => {
        const token = sessionStorage.getItem(accessToken);
        if (token) {
            return true
        };
        return false;
    }

    const clearSession = () => {
        sessionStorage.removeItem(accessToken);
        sessionStorage.removeItem(currentUser);
    }

    const handleSessionStorage = (user: any, token: string) => {
        sessionStorage.setItem(accessToken, token);
        sessionStorage.setItem(currentUser, JSON.stringify(user))
    }

    return ({
        getCurrentUser,
        isAuthenticated,
        accessToken,
        handleSessionStorage,
        clearSession
    })
}

export default AuthenticationUtills