# Team Career Camp Web Application

This is a web application for Team Career Camp to maintain a database of student interviews, including batch details, student information, course scores, interview records, and interview results.

## Features

- Sign Up and Sign In for employees.
- List of students and the ability to add new students.
- List of interviews and a form to schedule new interviews.
- Allocate students to interviews and mark result statuses.
- [BONUS FEATURE] External Jobs List to fetch real available jobs for React and Node.js in India.
- Download a complete CSV of all data with relevant columns.

## Folder Structure

The project follows a scalable folder structure for better organization:

- `app/controllers`: Contains controller files handling business logic and interacting with models.
- `app/models`: Contains Mongoose models for entities like User, Interview, Student, and Result.
- `app/routes`: Contains route files defining various routes and their associated controller functions.
- `app/views`: Contains EJS templates for rendering HTML pages.
- `config`: Contains configuration files, such as `passport.js` for authentication.
- `public`: Contains static files like CSS, JavaScript, and images.

## Setup

1. Install Node.js and MongoDB on your local system.

2. Clone the repository:
git clone https://github.com/yourusername/team-career-camp.git

css


3. Navigate to the project directory:
cd team-career-camp

markdown

4. Install dependencies:
npm install

bash

5. Create a `.env` file in the root directory and set the following environment variables:
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret

markdown

6. Start the development server:
npm start

markdown

7. Visit `http://localhost:3000` in your web browser to access the application.

## How to Use

1. Sign Up or Sign In using the provided credentials.

2. Add students by filling in the required details.

3. Schedule interviews by selecting the date and company.

4. Allocate students to interviews from the list of available students.

5. After the interviews, mark the result status for each student.

6. For the bonus feature, navigate to the External Jobs List page to view available jobs for React and Node.js.

7. To download a CSV of all data, click on the "Download CSV" button.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Passport.js for authentication
- EJS for templating
- csv-parser for CSV generation
- [Any additional libraries or APIs you may use]

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please open an issue or create a pull request.







