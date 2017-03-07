
let promise = fetch(
    'https:api.github.com/users/addyosmani/orgs', {
        method: 'GET',
        headers: {
            Authorization: 'token e51a3e5b9911663472da1ab815d73fb7660ad293'
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
              // loginArray.push(orgsData.login);
              // console.log(loginArray);
              // imgArray.push(orgsData.avatar_url);
              // console.log(imgArray);
              let orgsDataLi = document.createElement('li');
              let orgsImg = document.createElement('img');
              orgsImg.setAttribute('src', orgsData.avatar_url);
              //we need to add the image here
              let orgsLogin = document.createElement('h3');
              orgsLogin.innerText = orgsData.login;
              //we need to add the lgin here
              orgsDataLi.appendChild(orgsImg);
              orgsDataLi.appendChild(orgsLogin);
              // console.log(orgsDataLi);
              document.getElementById('organizations').childNodes[3].appendChild(orgsDataLi);
            });
        });
    } else {
        // console.log('Broken', responseObj.status);
        // console.log(document.getElementsByClassName('error'));
        let error = document.getElementsByClassName('error');
        let errorCode = responseObj.status;
        error[0].innerText = 'Broken ' + errorCode ;
    }
    console.log(loginArray, imgArray);
});
