
# El Futuro de las ECOAs - Web Application Proposal

This project is a proposal for a web application aimed at improving the student evaluation process for teachers at Tecnológico de Monterrey. The application utilizes modern web development technologies and integrates the ChatGPT API to create personalized surveys and feedback reports.

**Technologies Used**:
- **Front-end**: React, Tailwind CSS, Vite
- **Back-end**: Node.js, Express
- **Database**: PostgreSQL, pgAdmin
- **API Integration**: ChatGPT API for personalized survey generation
- **Development Tools**: Postman, pgAdmin, Git

## Key Features

- **Personalized Surveys**: Each student receives unique survey questions generated in real-time using the ChatGPT API.
- **Real-time Feedback**: Professors can view personalized feedback summaries generated from student responses.
- **User Roles**: Separate dashboards for students and professors, with different functionalities for each user type.
  - **Students**: Can view their courses and complete "ECOA" surveys.
  - **Professors**: Can view courses they teach, see which students completed the survey, and generate overall performance reports.
- **Database Integration**: PostgreSQL used for storing user data, survey responses, and report generation.

## Project Structure

- **Front-end**: Built using React, with Tailwind CSS for styling and Vite for fast builds and development.
- **Back-end**: Node.js handles the server-side operations, including API routes and database interactions.
- **Database**: PostgreSQL stores user information, survey responses, and reports. Queries are handled using pgAdmin and Postman for testing.
- **ChatGPT API**: Used to dynamically generate questions and create comprehensive feedback for professors based on student responses.

## How It Works

1. **Student Dashboard**: After logging in, students can view their enrolled courses and start a new ECOA survey.
2. **Survey Interaction**: Each question in the survey is dynamically generated by the ChatGPT API, and student responses are recorded.
3. **Professor Dashboard**: Professors can view their courses, see which students have completed the surveys, and generate performance reports from the responses.
4. **Feedback Generation**: A summary of all student responses is compiled using the ChatGPT API, which generates a detailed feedback report for professors.

## Requirements to run the program:

- Having Node.js installed on your computer.
- Having PostgreSQL, and pgAdmin installed on your computer.
- Create a database with the username ‘ecoa’ and password ‘ecoa’ named ‘ecoas_db_final’. This can be done using PostgreSQL, and pgAdmin.
- Restore the ‘ecoas_db_final’ database using the backup located in the ‘database’ folder of the repository.

## Instructions to run the program:

- Clone the repository to a local folder on your computer using git clone.
- Open a terminal window for each folder in the repository (node and ecoa-project).
- In each terminal, run the command npm install.
- In the server node, run the command node --watch index.js.
- In the client ecoa-project, run the command npm run dev.
