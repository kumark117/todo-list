/* eslint-disable */
import axios from 'axios';
import urlBuilder from './url-builder';

export function getRequest(resource) {
    if (resource === 'todos') {
        return axios.get(urlBuilder('todos?query=sorted'));
    } else {
        return axios.get(urlBuilder('tags'));
    }
}

export function getRequestById(id) {
    return axios.get(urlBuilder(`todos/${id}`))
}

export function postRequest(body) {
    return axios.post(urlBuilder('todos'), body)
}

export function putRequest(id, action) {
    return axios.put(urlBuilder(`todos/${id}/${action}`))
}

export function deleteRequest(id) {
    return axios.delete(urlBuilder(`todos/${id}`))
}
