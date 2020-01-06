import axios from "axios";

export const delete_lock_id= (id_lock) => {
    const payload = {
       id_lock: id_lock
    };
    return axios
        .post('http://localhost:5000/api/delete_lock_id', payload)
        .then(res => {
            console.log('Данные успешно были удалены', id_lock);
            return true;
        })
        .catch((error) => {
            console.log('Данные не были успешно удалены');
            console.log(error);
        });
};