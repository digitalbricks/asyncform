/**
 * Asynchronous form submission with vanilla js.
 * @version: 0.1
 * @credit: https://gomakethings.com/serializing-form-data-with-the-vanilla-js-formdata-object/  
 */


// get all forms with class .async-form
var forms = document.getElementsByClassName('async-form');

// iterate of each form
Array.prototype.forEach.call(forms, function(form) {
    // get url from form action
    var url = form.action;

    // get element for server response messages
    var messages = form.querySelector(".async-form__messages");

    // get submit button
    var button = form.querySelector("button");
    

    // add a hidden input for indication the server
    // that js was enabled (not necessary but you may react on)
    var hidden_input = document.createElement("input");
    hidden_input.type = "hidden";
    hidden_input.name = "hasjs";
    hidden_input.value = "true";
    form.appendChild(hidden_input);


    // add event listener for form submit event
    form.addEventListener('submit', function (event) {

        // prevent form from submitting to the server
        event.preventDefault();

        // add class to button (for styling)
        // and set to disabled (while fetching)
        button.classList.add('.async-form__button--fetching');
        button.disabled = true;
        
        // submit form via js
        fetch(url, {
            method: 'POST',
            body: new FormData(event.target),
        }).then(function (response) {
            // The API call was successful!
            
            // reset button
            button.classList.remove('.async-form__button--fetching');
            button.disabled = false;
            
            // now we check the HTTP status
            if (response.ok) {
                // if ok we return the text from response
                return response.text();
            }

            // if not ok, we reject
            return Promise.reject(response);
        }).then(function (html) {
            // update the form messages
            messages.innerHTML = "<div class='async-form__message async-form__message--success'>" + html + "</div>";

            // reset the form
            form.reset();
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);

            // update form message (as err.text() is still a promise we have to use .then())
            err.text().then(function(html){
                messages.innerHTML = "<div class='async-form__message async-form__message--error'>" + html + "</div>";
            })
            
        });
    
    });
});
