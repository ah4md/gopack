GoPack - Travel Packing List Manager

GoPack is a web-based travel packing list manager designed to help users organize and track their travel essentials. The app allows users to add items, mark them as packed, and reorder them based on priority. Additionally, it provides a visual progress tracker to show the packing status.

Demo

You can view the live demo of the project on GitHub Pages here:GoPack - Live Demo

Features

Add and Remove Items: Easily add new items to your packing list and remove them when they are no longer needed.

Mark Items as Packed: Keep track of which items are packed by marking them.

Reorder Items: Organize items based on priority or preference.

Visual Progress Tracker: View a progress bar to track how many items have been packed compared to the total list.

Technologies Used

React: For building the user interface and handling component logic.

JavaScript: For core functionality and state management using React hooks.

CSS: To style the app and ensure a clean, modern UI.

React Hooks: For managing component state and side effects.

Installation

Clone the repository

To get a local copy up and running, follow these steps:

Clone the repo:

git clone https://github.com/ah4md/gopack.git

Navigate to the project directory:

cd gopack

Install the necessary dependencies:

npm install

Running the app locally

To run the app locally, follow these steps:

Start the development server:

npm start

The app will be running on http://localhost:3000.

Build the project for production

To create a production build of the app, run:

npm run build

This will create an optimized build in the build/ directory, ready for deployment.

Deploying to GitHub Pages

To deploy the project to GitHub Pages, you can run:

npm run deploy

This will push the build to the gh-pages branch and update the GitHub Pages link.

Usage

Main Files

src/index.js: The entry point for the React app, where the app is rendered into the root div.

src/App.js: Contains the main logic for rendering and managing the packing list.

src/components/: Contains reusable components like PackingItem, PackingList, etc., used to add, remove, and display items.

Directory Structure

gopack/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── PackingItem.js
│   │   └── PackingList.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md

Contributing

Fork the repository.

Create a new branch (git checkout -b feature/your-feature).

Commit your changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature/your-feature).

Open a pull request.

License

Distributed under the MIT License. See LICENSE for more information.
