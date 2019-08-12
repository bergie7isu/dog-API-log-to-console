function logResults(jsonResponse) {
    for (i = 0; i < jsonResponse.message.length; i++) {
        console.log(jsonResponse.message[i]);
    }
}

function getDogPictures(numberOfDogs) {
    let fetchUrl = "https://dog.ceo/api/breeds/image/random/" + numberOfDogs;
    fetch(fetchUrl)
        .then(response => response.json())
        .then(jsonResponse => logResults(jsonResponse))
        .catch(error => alert("something's wrong!"));
}

function howManyPictures() {
    let numberOfDogs = $('#number-of-dogs').val();
    getDogPictures(numberOfDogs);
}
function watchForSubmit() {
    $('form').submit(function(event) {
        event.preventDefault();
        howManyPictures();
    })
}

$(watchForSubmit)