export const formatString = () => { }

export const getUserInfo = () => {
    const userInfo = localStorage.getItem('userInfo')
    return userInfo ? JSON.parse(userInfo) : null
}

export const getEmployerInfo = () => {
    const employerInfo = localStorage.getItem('employerInfo')
    return employerInfo ? JSON.parse(employerInfo) : null
}