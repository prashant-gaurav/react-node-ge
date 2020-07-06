/*---------------------------------------------------------------*
 *   Author : Prashant Gaurav                                    *
 *   Module : CATEGORY MODULE                                    *
 *---------------------------------------------------------------*/
import {baseUrl, authHeaders, authFileHeaders} from '../config';

/* ----------------------------------------- *
 *                   GET                     *
 * ----------------------------------------- */
export const getSubCategory = async () => {
  const URL = baseUrl + '/sub-category';
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
export const addSubCategory = async data => {
  const URL = baseUrl + '/sub-category';
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
export const editSubCategory = async categoryId => {
  const URL = baseUrl + '/sub-category/edit/' + categoryId;
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
export const updateSubCategory = async (categoryId, data) => {
  const URL = baseUrl + '/sub-category/update/' + categoryId;
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
  const URL = baseUrl + '/sub-category/delete/' + categoryId;
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
