// const ls = localStorage.getItem('auth-data');
// const data = JSON.parse(ls);

const ss = window.sessionStorage.getItem('auth-session-data');
const sessionData = JSON.parse(ss);

module.exports = {
    drawerWidth: 250,
    sessionKey: 'auth-session-data',
    sessionData: sessionData,
    localStorageAuthKey: 'auth-data',
    baseUrl: 'http://ec2-52-66-209-53.ap-south-1.compute.amazonaws.com:5002/admin/v1',
    // baseUrl: 'http://localhost:5002/admin/v1',
    authHeaders: {
        'Content-Type': 'application/json',
        token: ss && sessionData['authToken'],
    },
    authFileHeaders: {
        token: ss && sessionData['authToken'],
    },
};
