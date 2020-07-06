/*---------------------------------------------------------------*
 *   Author : Prashant Gaurav                                    *
 *   Module : CATEGORY MODULE                                    *
 *---------------------------------------------------------------*/
import {baseUrl, authHeaders, authFileHeaders} from '../config';

/* ----------------------------------------- *
 *                   GET                     *
 * ----------------------------------------- */
export const getCategory = async () => {
  const URL = baseUrl + '/category';
  const requestOptions = {
    method: 'get',
    headers: authHeaders,
  };
  return fetch(URL, requestOptions)
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

/* ----------------------------------------- *
 *                    CREATE                 *
 * ----------------------------------------- */
export const addCategory = async data => {
  const URL = baseUrl + '/category';
  const requestOptions = {
    method: 'post',
    headers: authFileHeaders,
    body: data,
  };
  return fetch(URL, requestOptions)
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

/* ----------------------------------------- *
 *                    EDIT                   *
 * ----------------------------------------- */
export const editCategory = async categoryId => {
  const URL = baseUrl + '/category/edit/' + categoryId;
  const requestOptions = {
    method: 'get',
    headers: authHeaders,
  };
  return fetch(URL, requestOptions)
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

/* ----------------------------------------- *
 *                    UPDATE                 *
 * ----------------------------------------- */
export const updateCategory = async (categoryId, data) => {
  const URL = baseUrl + '/category/update/' + categoryId;
  const requestOptions = {
    method: 'put',
    headers: authFileHeaders,
    body: data,
  };
  return fetch(URL, requestOptions)
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

/* ----------------------------------------- *
 *                  DELETE                   *
 * ----------------------------------------- */
export const deleteCategory = async categoryId => {
  const URL = baseUrl + '/category/delete/' + categoryId;
  const requestOptions = {
    method: 'delete',
    headers: authHeaders,
  };
  return fetch(URL, requestOptions)
    .then(response => response.json())
    .then(data => {
      return data;
    });
};
