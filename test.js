
const person = {
    name: 'Sahil ',
    age: 21,
    occupation: 'DBA'
};

function printPersonDetails(Object) {
    for (const property in Object) {
        if (Object.hasOwnProperty.call(Object, property)) {
            console.log(`${property}: ${Object[property]}`);
        }
    }
}

printPersonDetails(person);
