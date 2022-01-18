const generateHTML = (teamMembers) => {


    // Manager Section
    const createManager = (manager) => {
        return `
        <div class="card">
        <div class="card-header">
            <h2 class="card-title">
            ${manager.getName()}
            </h2>
            <h3 class="card-title">${manager.getRole()}
            </h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${manager.getId()}</li>
                <li class="list-group-item"> Email: ${manager.getEmail()} </li>
                <li class="list-group-item"> Phone Number: ${manager.getOfficeNumber()} </li>
            </ul>
        </div>
    </div>
        `;
    };

    // Engineer Section

    const createEngineer = engineer => {
        return `
        <div class="card">
        <div class="card-header">
            <h2 class="card-title">
            ${engineer.getName()}
            </h2>
            <h3 class="card-title">${engineer.getRole()}
            </h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${engineer.getId()}</li>
                <li class="list-group-item"> Email: ${engineer.getEmail()} </li>
                <li class="list-group-item"> Github: ${engineer.getGithub()} </li>
            </ul>
        </div>
    </div>
        `;
    };


    // Intern Section

    const createIntern = intern => {
        return `
        <div class="card">
        <div class="card-header">
            <h2 class="card-title">
            ${intern.getName()}
            </h2>
            <h3 class="card-title">${intern.getRole()}
            </h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${intern.getId()}</li>
                <li class="list-group-item"> Email: ${intern.getEmail()} </li>
                <li class="list-group-item"> Phone Number: ${intern.getSchool()} </li>
            </ul>
        </div>
    </div>
        `;
    };

    const webpage = [];

    webpage.push(teamMembers.filter(employee => employee.getRole() === "Manager")
    .map(manager => createManager(manager)));

    webpage.push(teamMembers.filter(employee => employee.getRole() === "Engineer")
    .map(engineer => createEngineer(engineer)));

    webpage.push(teamMembers.filter(employee => employee.getRole() === "Intern")
    .map(intern => createIntern(intern)));

    return webpage.join("")

}; 

module.exports = teamMembers => {

    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<h1>Our Team</h1>
<body>
<div class="container">
<div class="row">
    <div class="col-12">
        <h1>Our Team</h1>
    </div>
</div>
</div>
<div class="container">
<div class="row">
    <div class="row col-12 d-flex">
        ${generateHTML(teamMembers)}
    </div>
</div>
</div>



</body>
</html>
`

};