// Function to export and create a HTML page using the below template
module.exports = myTeam => {
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
            <!-- font awesome style sheet for icons-->
            <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
            />
            
            <!-- bootstrap style sheet -->
            <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            />
            
            <!-- local style sheet -->
            <link href="style.css" rel="stylesheet">
            <title>Team Profile Generator</title>
        </head>
    
        <body>
            <!-- body header section  -->
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-5 text-center text-light">My Team</h1>
                </div>
            </div>

            <!-- body cards -->
            <div class="container">
                <div class="row">
                    <div class="main-section col-12 d-flex justify-content-center">
                        ${createTeamProfile(myTeam)}
                    </div>
                </div>
            </div>

            <!-- body footer section -->
            <footer class="footer-copyright">
            <div class="footer-text">© 2021 Mohit Arora. Confidential and Proprietary. All Rights Reserved</div>
            </footer>
        </body>
    </html>
    `;
};

// create team member profile
const createTeamProfile = myTeam => {

                    // create manager card and profile
                    const createManagerProfile = manager => {
                        `<div class="card employee-card manager-card" style="width: 18rem;">
                            <div class="card-header bg-primary">
                                <h3 class="card-title text-light">Name</h3>
                                <h5 class="card-title text-light"><i class="fas fa-mug-hot"> Title</i></h5>
                            </div>
                            <div class="card-body">
                                <ul class="list-group text-dark">
                                    <li class="list-group-item">ID:</li>
                                    <li class="list-group-item">mailto:Email:</li>
                                    <li class="list-group-item">Office number:</li>
                                </ul>
                            </div>
                        </div>
                        `;
                    };
                    
                    const createEngineerProfile = engineer => {
                        // create engineer card and profile
                        `<div class="card employee-card engineer-card" style="width: 18rem;">
                            <div class="card-header bg-primary">
                                <h3 class="card-title text-light">Name</h3>
                                <h5 class="card-title text-light"><i class="fas fa-glasses"> Title</i></h5>
                            </div>
                            <div class="card-body">
                                <ul class="list-group text-dark">
                                    <li class="list-group-item">ID:</li>
                                    <li class="list-group-item">mailto:Email:</li>
                                    <li class="list-group-item">GitHub:</li>
                                </ul>
                            </div>
                        </div>
                        `;
                    };
    
                    const createInternProfile = intern => {
                        // create intern card and profile
                        `<div class="card employee-card intern-card" style="width: 18rem;">
                            <div class="card-header bg-primary">
                                <h3 class="card-title text-light">Name</h3>
                                <h5 class="card-title text-light"><i class="fas fa-user-graduate"> Title</i></h5>
                            </div>
                            <div class="card-body">
                                <ul class="list-group text-dark">
                                    <li class="list-group-item">ID:</li>
                                    <li class="list-group-item">mailto:Email:</li>
                                    <li class="list-group-item">School:</li>
                                </ul>
                            </div>
                        </div>
                        `;
                    };
};