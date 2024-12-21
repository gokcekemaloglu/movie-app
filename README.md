# Movie_App

https://movie-app-gokce.vercel.app/

## 🎯 Project Purpose

**CineWave** is a movie application that allows users `to authenticate using Firebase Auth`, either via email and password or Google authentication. After logging in, users can explore movie data sourced from `The Movie Database (TMDB)`, which is fetched using `Axios` with `async/await` for seamless data handling.

The main objectives of this project are to enhance skills in:

- `React`
- `Context API`
- `Router`
- `Firebase`
- `Tailwind CSS`

while implementing effective user authentication and providing a rich user experience with movie details.

## 🔐 User Authentication and Workflow

CineWave’s user authentication and navigation workflow ensures a seamless and secure experience:

1. **📝 User Registration and Login:**

   - Users can sign up or log in using **email/password** or **Google authentication**. This is managed through `Firebase Auth` in `AuthContext`.
   - Successful login triggers a `Toastify` 🎉 **success notification**, while errors (e.g., wrong password, user not found) trigger appropriate ⚠️ **warning notifications**.

2. **🔄 Navigation Bar Update:**

   - Once logged in, the **“Login” button** in the navigation bar changes to display the user’s **profile photo** fetched from Google or Firebase.

3. **🎥 Accessing Movie Details:**

   - Users can navigate to the **movie details page** by clicking on a movie image. If the user is not logged in, they will be **redirected** to the login page with a ⚠️ **warning notification**.
   - Upon successful login, users can view **movie details**, watch **trailers**, and add movies to their **favorites list** ❤️.

4. **🔒 Private Route Protection:**

   - The application uses a `PrivateRoute` component to protect sensitive pages like **movie details**. If a user attempts to access these pages without being authenticated, they are **redirected** to the login page.

5. **🌐 Movie API Integration:**

   - Movie data, including details and trailers, is fetched using `Axios` in an **asynchronous** manner, ensuring the application remains responsive. Custom API functions defined in `MovieApi.js` handle the requests and data formatting.

6. **🔑 Password Reset:**
   - Users can reset their passwords via a **password reset page**. This is managed through Firebase’s password reset functionality, and notifications are provided through `Toastify` 📧.
  
## Outcome

![Movie App](![MovieApp](https://github.com/user-attachments/assets/e3999fa1-fca5-42f4-a9d6-db2f77c95991)


## Project Structure

```
|--CineWave_Movie_App(folder)
|
├── public
│     └── index.html
├── src
│    ├── assets
│    │       └──  [images]
│    ├── auth
│    │       └── firebase-config.js
│    ├── components
│    │       ├── Button.jsx
│    │       ├── Header.jsx
│    │       ├── InputField.jsx
│    │       ├── LoginForm.jsx
│    │       ├── Logo.jsx
│    │       ├── MovieCard.jsx
│    │       ├── MovieCard.jsx
│    │       ├── Navbar.jsx
│    │       ├── ResetForm.jsx
│    │       ├── Search.jsx
│    │       ├── SignUpForm.jsx
│    │       ├── Slider.jsx
│    │       ├── Switch.jsx
│    │       └── Spinner.jsx
│    ├── contexts
│    │       └── AuthProvider.jsx
│    ├── helpers
│    │       └── ToastNotify.js
│    ├── pages
│    │       ├── Home.jsx
│    │       ├── Login.jsx
│    │       ├── MovieDetails.jsx
│    │       ├── Movies.jsx
│    │       ├── NotFound.jsx
│    │       ├── Reset.jsx
│    │       └── SignUp.jsx
│    ├── router
│    │       ├── AppRouter.jsx
│    │       └── PrivateRouter.jsx
│    ├── services
│    │       └── MovieApi.js
│    ├── App.js
│    ├── index.css
│    └── index.js
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## ✨ Project Features

- **🔐 User Authentication**: Users can sign up and log in using `Firebase Auth via email/password or Google authentication`. All authentication functions are managed through `AuthContext using Context API`, making them accessible across the application. `Successful or failed login/logout actions trigger Toastify notifications (success, warning, error) to keep the user informed`.

- **🔄 Dynamic Navbar**: Upon successful login, the "Login" button in the navbar is replaced with the user's profile photo, enhancing the user experience.

- **🎥 Movie Data Integration**: The movie data is sourced from `The Movie Database (TMDB) API`. Data is fetched using `Axios with async/await`, ensuring smooth and efficient data retrieval. `Custom API functions are defined in MovieApi.js within the services directory, making it easy to reuse and maintain API calls across the application`.

- **🔒 Protected Routes**: Users can browse the homepage freely, but attempting to view movie details without being logged in will trigger a Toastify warning, and they will be redirected to the login page. Once authenticated, they can view detailed movie information, trailers, and add movies to their favorites.

- **♻️ Reusable Components**: The project follows the `DRY (Don’t Repeat Yourself) principle` by using reusable components like `InputField.jsx` for form inputs and `Button.jsx` for buttons. These components accept props for customization, allowing for consistent and maintainable UI elements throughout the application.

- **🌐 Routing**: `React Router` is used for navigation between different pages. `useNavigate` and `useParams` are used for programmatic navigation and accessing route information.

- **🗃️ State Management**: The application’s state, including authentication and movie data, is managed through `Context API`, ensuring a global and consistent state across the app.

- **🎨 Styling**: The entire application is styled using `Tailwind CSS`, providing a `responsive, modern, and visually appealing design`.

- **🔍 Search Functionality**: Users can search for movies by title through a search bar. The search results are dynamically fetched and displayed, allowing users to explore various movies.

- **🌗 Dark Mode Toggle**: The application includes a dark mode toggle feature accessible via a button in the navbar, allowing users to switch between light and dark themes for a personalized viewing experience.



## 🚀 Technologies Used

- **ReactJS**: For building the user interface and managing the component structure.
- **Firebase Auth**: For secure user authentication via email/password and Google authentication.
- **Context API**: For global state management, particularly for user authentication and movie data.
- **Axios with async/await**: For handling HTTP requests to `The Movie Database (TMDB)` API.
- **Tailwind CSS**: For styling the application, providing a responsive and modern design.
- **React Router**: For managing page navigation, including private routes that protect sensitive pages.
- **Toastify**: For providing user feedback through notifications during authentication and data operations.
- **Local Storage**: To save and persist favorite movies locally, allowing users to access their favorite list even after page refreshes.
- **API**: Movie data is fetched from [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) using the following endpoint:
  - `https://api.themoviedb.org/3/movie/{movie_id}?api_key=YOUR_API_KEY`

### 📚 At the end of the project, will be able to;

By completing the **CineWave** project, you will have gained valuable experience and will be able to:

- **Implement user authentication** using Firebase Auth, including email/password and Google authentication.
- **Manage global state** effectively with Context API, ensuring consistent state management across the application.
- **Fetch and handle data** from external APIs using Axios with async/await, ensuring smooth and efficient data retrieval.
- **Protect routes** using PrivateRoute components to ensure that only authenticated users can access sensitive information.
- **Utilize Local Storage** to persist user preferences, such as saving favorite movies, across sessions.
- **Apply Tailwind CSS** to create responsive, modern, and visually appealing web applications.
- **Create reusable components** in React to adhere to the DRY principle, improving code maintainability and reusability.
- **Provide user feedback** using Toastify, enhancing the user experience by displaying success, warning, and error notifications.
- **Navigate between pages** effectively using React Router, including handling private and dynamic routes.

These skills are essential for developing complex and feature-rich React applications and will serve as a solid foundation for future projects.

<p align="center"> 🍿 Enjoy Your Movie Time with CineWave! 🎬 </p>
