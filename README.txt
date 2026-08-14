# CineMatch — VS Code Mini Project

A beginner-friendly movie recommendation web app built with:
- HTML5
- CSS3
- Vanilla JavaScript
- Browser Local Storage

## How to run

1. Extract the ZIP file.
2. Open the `CineMatch` folder in Visual Studio Code.
3. Open `index.html`.
4. Recommended: install the VS Code extension **Live Server**.
5. Right-click `index.html` → **Open with Live Server**.
6. The app opens in your browser.

You do NOT need Java, Node.js, Python, npm, or a database server for this prototype.

## Demo flow

1. Click Get Started.
2. Register a name, email and password.
3. Select at least 3 genres.
4. Rate at least 5 movies.
5. Click "See My Recommendations".
6. Explore Home, Discover, Movie Details, My Ratings, Watchlist and Profile.

## Demo Admin

To test the Admin Dashboard, open `script.js` and locate the `users` state after registering. For a simple demo, the easiest method is to use the browser console:

localStorage.setItem("cineMatchState", JSON.stringify({...}))

For a student presentation, you can instead temporarily change `accountType:"User"` to `accountType:"Admin"` in the registration function, register an admin demo account, then change it back to User.

## Important

This is an academic prototype. Authentication and data are stored in the browser's Local Storage, so it is not suitable for production security.

The movie catalogue uses text-based generated poster artwork rather than copyrighted movie poster files. Replace them with properly licensed artwork if you later publish the application.

## Project structure

CineMatch/
├── index.html
├── style.css
├── script.js
└── README.txt
