# Website Setup Guide

## Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (npm is installed with Node.js by default)

## Installation

### 1. Clone the repository
```sh
git clone https://github.com/MariaHajdic/JackOfAllDogs.git
cd JackOfAllDogs
```

### 2. Install dependencies
If you're using **npm**:
```sh
npm install
```
If you're using **yarn**:
```sh
yarn install
```

### 3. Run the development server
If you're using **npm**:
```sh
npm run dev
```
If you're using **yarn**:
```sh
yarn dev
```

### 4. Open the website
Once the server is running, open your browser and go to:
```
http://localhost:3000
```
(Note: The port may vary based on your project settings.)

## Building for Production
If you need to build the project for production:
```sh
npm run build  # or yarn build
```

## Running in Production
After building, start the production server:
```sh
npm run start  # or yarn start
```

## Additional Commands
- **Linting:** `npm run lint` / `yarn lint`
- **Formatting:** `npm run format` / `yarn format`
- **Testing:** `npm test` / `yarn test`
