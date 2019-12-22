import axios from "axios";

export const sendInputValue = (name, surname, email, password) => {
    const payload = {
        name: name,
        surname: surname,
        email: email,
        password: password
    };
    return axios
        .post('http://localhost:5000/api/send', payload)
        .then(res => {
            console.log('Данные успешно были отправлены');
            return res.data;
        })
        .catch((error) => {
            console.log('Данные не были успешно отправлены');
            console.log(error);
        });
};
