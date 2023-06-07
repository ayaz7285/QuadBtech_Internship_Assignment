
# QuadBtech_Internship_Assignment

## Introduction

This repository contains the source code and documentation for a Movie Ticket Booking Application which was a part of the assignment provided by QuadBtech for ReactJs Developer Internship.

## Features

The Movie Ticket Booking Website offers the following key features:

1. **Homepage**: Go to this url "http://localhost:3000/home", this is the homepage of the website. You will see a list of movies and shows displayed. The movie poster and the title of the show is specified. The rating, genre and the language of the show is also mentioned. You have two buttons 'Book Show' where you can directly book a ticket for that show and then you have 'Learn More' which shows you relevant details about that show. 

2. **About the movie page**: This page gives a brief summary about the movie/show. It also shows relevant details about the show like genre, language, rating, runtime, status, and schedule. You have a button 'Book Show' if you want to book a ticket of that show.

3. **Book your Ticket page**: This page shows relevant details about the movie you want to purchase a ticket. It also has a form where users need to fill his relevant details. When the form is submitted you get a confirmation alert in the form of a Snackbar in the bottom-left of the screen and the user details is stored in the local storage of the browser as mentioned in the assignment task. On submitting the form, it doesnot reload as mentioned in the assignment.
4. All the data is being fetched dynamically from this api which was specified in the assignment **[https://api.tvmaze.com/search/shows?q=all](https://api.tvmaze.com/search/shows?q=all)**
5. This website is responsive for mobile, tablet and desktop view.

## Technologies Used

The Movie Ticket Booking Website is built using the following technologies:

- React.js: A JavaScript library for building user interfaces.
- HTML and CSS: Used for structuring and styling the web pages.
- Material UI: Used components to create a visually appealing and interactive user experience with responsive layouts and pre-built styles.

## Installation and Setup

To run the Movie Ticket Booking Website locally, follow these steps:

1. Clone the repository to your local machine using the following command: 
```
https://github.com/ayaz7285/QuadBtech_Internship_Assignment.git
```
2. Navigate to the project directory: 
```
cd QuadBtech_Internship_Assignment
```
3. Install the required dependencies for the server: 
```
npm install
```
4. Start the server:
```
npm start
```
5. Open your web browser and visit `http://localhost:3000/home` to access the Website.

## Contributing

Contributions to the Movie Ticket Booking Website are welcome! If you find any bugs, have feature requests, or want to contribute improvements, please follow these steps:

1. Fork the repository on GitHub.

2. Create a new branch for your feature/bug fix.

3. Make the necessary changes in your branch.

4. Commit your changes with descriptive commit messages.

5. Push your branch to your forked repository.

6. Submit a pull request to the main repository, explaining your changes and why they should be merged.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries or further information, please contact [Ayaz Sarwar] at [ayaz.3.sarwarchem@gmail.com].
