# password-generator
Generates passwords that would be considered strong. 
## Acceptance Criteria
>GIVEN I need a new, secure password
>WHEN I click the button to generate a password
>THEN I am presented with a series of prompts for password criteria

This was a challenge to accomplish at first because my use of `confirm` and `prompt` wanted to run as soon as the page loaded. I learned that removing the parenthesis at the end of the function in the button click event would prevent the prompts from showing until the button was actually clicked.

>WHEN prompted for password criteria
>THEN I select which criteria to include in the password
>WHEN prompted for the length of the password
>THEN I choose a length of at least 8 characters and no more than 128 characters
>WHEN asked for character types to include in the password
>THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special >characters
>WHEN I answer each prompt
>THEN my input should be validated and at least one character type should be selected
>WHEN all prompts are answered
>THEN a password is generated that matches the selected criteria

The function `getUserPreferences()` uses a `prompt` to get the length of the password, making sure the user stays between 8 and 128 characters. The other criterian uses `confirm`. Holding the user to true / false answers cuts down on the possible input errors. this function then updates the global variables used by the other functions to generate the password.

>WHEN the password is generated
>THEN the password is either displayed in an alert or written to the page

The password is displayed prominently in the box.

## What I Learned

I enjoyed the challenge of creating functions that interacted with one another and the arrays in different ways. One particular challenge was that the variables were used in multiple functions and so they needed to stay at the global scope. That meant the functions needed to update the variable rather than just define it. Another challenge that I wanted a more elegant solution too was when the user hits cancel on the length `prompt`. Ideally the page would reset, however I was not able to accomplish this. As a placeholder an alert message informs the user that no password will be generated.

### Deployed Application

[Password Generator](https://torysnopl.github.io/password-generator/)

