import api from "./CreateApi";

export const GetTask = async (path, option) => {
    const respone = await api.get(path);
    return respone.data;
};
export const pushData = (path, data) => {
    return  api.post((path),{
        name:data.name,
        email:data.email,
        password:data.password,
    })
}