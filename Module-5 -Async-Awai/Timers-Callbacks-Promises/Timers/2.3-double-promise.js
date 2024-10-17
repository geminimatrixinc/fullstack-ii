function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: 'Data fetched successfully' };
            resolve(data);
        }, 2000);
    });
}

function additionalAction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Additional action completed');
        }, 1000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
        return additionalAction();
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
