// declare the main function
function lowerCaseWords(mixedArray) {

    // declare a new promise
    let handleArray = new Promise(function(resolve, reject) {
        // check if array is not empty
        if (mixedArray.length > 0) {
            // strip out all non string elements and convert to lower-case
            const stringsOnly = mixedArray.filter(item => typeof item === 'string');
            // convert the items to lower case
            const lowerCaseWords = stringsOnly.map(item => item.toLowerCase());
            // resolve array
            resolve(lowerCaseWords);
        } else {
            // reject array
            reject('Array does not contain any item.');
        }
    });
    
    // execute promise and log the result to console
    handleArray.then(
        function(value) {console.log(value);},
        function(error) {console.log(error);}
    );

}

// create an array with mixed data types
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

// call function
lowerCaseWords(mixedArray);