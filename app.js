const fs = require('fs');
const primaryUsers = [
    {name: 'Max', gender: 'male'},
    {name: 'Vlad', gender: 'male'},
    {name: 'Karina', gender: 'female'},
    {name: 'Olga', gender: 'female'},
    {name: 'Vitaliy', gender: 'male'}
];

for (const user of primaryUsers) {
    fs.writeFile(`${user.name}.json`, JSON.stringify(user), err => {
        if (err) console.log(err);
    })
}

for (const user of primaryUsers) {
    fs.readFile(`${user.name}.json`, (err, data) => {
        if (err) console.log(err);
        else {
            const usersData = JSON.parse(data);
            if (usersData.gender === 'male') {
                fs.writeFile(`./20_00/${usersData.name}`, JSON.stringify(usersData), err => {
                    if (err) console.log(err);
                })
            } else {
                fs.writeFile(`./18_00/${usersData.name}`, JSON.stringify(usersData), err => {
                    if (err) console.log(err);
                })
            }
        }
    })
}
