// create method resolvedPromisethat resolves a message after 500ms
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success_msg = {'message': 'delayed success!'};
            resolve(success_msg);
        }, 500);
    });
}
// create method rejectedPromisethat rejects a message after 500ms
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let fail_msg = {'error': 'delayed exception!'};
            reject(fail_msg);
        }, 500);
    });
}

// call the resolvedPromise() function
resolvedPromise().then((message) => console.log(message));
// call the rejectedPromise() function
rejectedPromise().catch((message) => console.log(message));