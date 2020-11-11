const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('error getting resource');
            }
        });
    
        request.open('GET', resource);
        request.send();
    });
}

getTodos('todos/berci.json').then(data => {
    console.log('promise 1 resolved: ', data);
    return getTodos('todos/icreb.json');
}).then(data => {
    console.log('promise 2 resolved: ', data);
    return getTodos('todos/eetir.json');
}).then(data => {
    console.log('promise 3 resolved: ', data);
}).catch(err => {
    console.log('promise rejected: ', err);
});

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // resolve('some data');
//         reject('some error');
//     });
// };

// getSomething().then(data => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then((data) =>{
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });
