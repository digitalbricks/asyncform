# asyncform
Vanilla JS aysnc form submission.

## Usage
Create a form with class `.async-form`, a submit button and an empty `<div>` with class `.async-form__messages` (where the server response sholud be displayed):

```html
<form action="/url/to/your/script" method="post" class="async-form">
    <div class="frm__row">
        <label for="frm_name">Name</label>
        <input type="text" name="name" id="frm_name">
    </div>
    <div class="frm__row">
        <label for="frm_firstname">First name</label>
        <input type="text" name="firstname" id="frm_firstname">
    </div>
    <div class="frm__row">
        <label for="frm_email">E-Mail</label>
        <input type="email" name="email" id="frm_email">
    </div>
    <div class="frm__row">
        <label for="frm_message">Message</label>
        <textarea name="message" id="frm_message" rows="8"></textarea>
    </div>
    <button type="submit">Submit</button>
    
    <div class="async-form__messages"></div>

</form>
```
Now you just have to load the script (or include it in your merge-minify process):

```html
<script src="asyncform.min.js"></script>
```

**That's it.**
All submittions of this form will then be sent asynchronous to the URL specified in the form `action` attribute.

## Notes
### Internet Explorer
Internet Explorer 11 support is realised via polyfills (https://cdn.jsdelivr.net/npm/whatwg-fetch@3.4.0/ and https://cdn.jsdelivr.net/npm/promise-polyfill@8.1.3/) – wich are already included. 

### JSON Response (optional, since v1.3 – 09/2024)
This script was originally made for handling text (or html) responses only. In version 1.3 I added the ability to respond with JSON – the script will determine between a text or a JSON reponse automatically (so its backward compatablie). When responding with JSON, the script expects the message to be named `message` in the JSON response. You may also add an array of missing fields in that response, named `missingFields`.

So, a JSON reponse may look like this:

```json
{"message":"Some fields are missing","missingFields":["email","firstname"]}
```

If `missingFields` is set, the script add a class `.async-form__missing` to all matching fields of the form. You may use this class to highlight such fields visually.

Have a look in the `/test` folder for a working example (using a simple PHP script as the endpoint).

### Button styling
While the form action url is fetched, the form submit button get disabled an a class called `.async-form__button--fetching`. You may use this for styling.
