'use strict';


function getImage(number) {
    if (number > 50) {
        alert('The maximum is 50');
    } if (number < 1) {
        alert('The minimum is 1')
    } 
    else {
        fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
            .then(response => response.json()) 
            .then(responseJson => 
                console.log(responseJson))
            .catch(error => alert('Please check your internet or the server might be down.'));
    };
}


function pressSubmit() {
    $('.submit').on('click', function(s) {
        let number = $('.inputs').val();
        s.preventDefault(); 
        getImage(number);
        $('.results').empty();
    });
}

$(function() {
    console.log('App loaded! Waiting for you to hit submit!');
    pressSubmit();
});

