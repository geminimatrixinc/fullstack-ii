function fetchData(callback1, callback2) {
    setTimeout(() => {
        const data = { message: 'Data fetched successfully' };
        callback1(data);
        callback2('Additional callback executed');
    }, 2000);
}

fetchData(
    (data) => {
        console.log(data);
    },
    (message) => {
        console.log(message);
    }
);
