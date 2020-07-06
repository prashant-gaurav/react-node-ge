/*---------------------------------------------------------------*
 *   Author : Prashant Gaurav                                    *
 *   Module : Admin auth                                         *
 *---------------------------------------------------------------*/
import {baseUrl, authHeaders, localStorageAuthKey, sessionKey} from '../config';
/* ----------------------------------------- *
 *                CHECK AUTH                 *
 * ----------------------------------------- */
export const userLogin = async (adminEmail, adminPassword) => {
  const URL = baseUrl + '/auth/login';
  const requestOptions = {
    method: 'post',
    headers: authHeaders,
    body: JSON.stringify({adminEmail, adminPassword}),
  };
  return fetch(URL, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.success) {
        const authData = data.authData;
        // console.log(authData);
        window.sessionStorage.setItem(sessionKey, JSON.stringify(authData));
        // localStorage.setItem(localStorageAuthKey, JSON.stringify(authData));
      }
      return data;
    });
};
/* ----------------------------------------- *
 *                LOGOUT                     *
 * ----------------------------------------- */
export const userLogout = async () => {
  // await localStorage.removeItem(localStorageAuthKey);
  await sessionStorage.removeItem(sessionKey);
  return true;
};
