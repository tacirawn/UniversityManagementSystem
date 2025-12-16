How to Run
To execute the program, open the terminal in the project directory and run:
node main.js

File Organization
The project structure centers around `main.js`, which serves as the entry point and orchestrates the entire workflow. Data is retrieved asynchronously via `database.js`, while the `Student` class in `models.js`
enforces data integrity through immutability. Finally, all complex logic, including average calculations and filtering, is modularized within `analytics.js` to keep the code clean.

Challenges
During development, I mainly struggled with asynchronous scope and ensuring the callback executed at the right time inside the timer. I also had to handle errors using try-catch blocks to prevent crashes when testing
the immutable ID. Finally, I debugged some logic errors regarding method parentheses and type matching in the filter function, which helped me understand strict mode better.
