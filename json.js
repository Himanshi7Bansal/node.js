const biodata = {
    name : 'Himanshi Bansal',
    age : 24,
    do : "study"
};

console.log(biodata.name);  // Himanshi Bansal

// convert objData to JSON format
const json = JSON.stringify(biodata);
console.log(json);  // {"name":"Himanshi Bansal","age":24,"do":"study"} (json have inverted commas in key's)

// convert JSON to objData format
const obj = JSON.parse(json);
console.log(obj);   // { name: 'Himanshi Bansal', age: 24, do: 'study' }    (obj don't have inverted commas in key's)
console.log(obj.name);  // Himanshi Bansal