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
Internet Explorer 11 is currently not supported because it lacks the fetch API.

### No JSON
This script is currently made for handling text (or html) responses, **no** JSON. If you want to handle JSON responses, the script has to be modified (replace at least `response.text()`with `response.json()`).
In my usecase for contact forms, I prefer the text results as they act as fallback if the client hasn't JS enabled.

### Button styling
While the form action url is fetched, the form submit button get disabled an a class called `.async-form__button--fetching`. You may use this for styling.
