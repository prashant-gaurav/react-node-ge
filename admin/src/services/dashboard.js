/*---------------------------------------------------------------*
 *   Author : Prashant Gaurav                                    *
 *   Module : SUPPORT MODULE                                     *
 *---------------------------------------------------------------*/

import {baseUrl, authHeaders} from '../config';

/* ----------------------------------------- *
 *           GET DASHBOARD DATA              *
 * ----------------------------------------- */
export const getDashboardData = async () => {
  console.log(authHeaders);
  const URL = baseUrl + '/dashboard';
  const requestOptions = {
    method: 'post',
    headers: authHeaders,
  };
  return fetch(URL, requestOptions)
    .then(response => response.json())
    .then(data => {
      return data;
    });
};
