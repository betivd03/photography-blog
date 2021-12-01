import * as api from "../helpers/api.js";
import * as request from "../helpers/requester.js";

export const getAll = () => request.get(`${api.photos}?sortBy=_createdOn%20desc`);
export const getMyPhotos = (id) => request.get(`${api.photos}?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`);
export const getPhoto = (id) => request.get(`${api.photos}/${id}`);
export const addPhoto = (photo) => request.post(api.photos, photo);
export const editPhoto = (id, photo) => request.put(`${api.photos}/${id}`, photo);
export const deletePhoto = (id) => request.del(`${api.photos}/${id}`);