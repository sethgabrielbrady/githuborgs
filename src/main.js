//https://api.github.com/users/addyosmani/orgs



let promise = fetch(
    'https:api.github.com/users/addyosmani/orgs', {
        method: 'GET',
        headers: {
            Authorization: 'token d2b1b642f9fb46503b9963224d58230124400c08'
        }

    }
);

let loginArray = [];
let imgArray = [];

promise.then(function handleResponse(responseObj) {
    console.log(responseObj); //this returning 200
    if (responseObj.status > 199 && responseObj.status < 300) {
        responseObj.json().then(function printData(data) {

            data.forEach(function getLoginAndAvatar(orgsData) {

              loginArray.push(orgsData.login);
              // console.log(loginArray);
              imgArray.push(orgsData.avatar_url);
              // console.log(imgArray);

            });


        });
    } else {
        console.log('Error-', responseObj.status);
    }

    console.log(loginArray, imgArray)
});




//Were going to fetch the data from github
//     ***** --- check that we are getting data from github
//     ****take the response and turn it into an array
//--****we want th eorganization entry and the logo
//--****we need to handle any errors from the server ftom the gh status
//--these need to bne added top a UL inside the HTML via JS
//--      add the login index and img index to the UL
//--
//--
//--
//--      --this will use the dom methods
//--
