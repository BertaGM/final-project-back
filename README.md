# Nerdmas Balls API

This is a simple REST API called "Nerdmas Balls" with various endpoints for managing a collection of data. Below is the detailed documentation for each endpoint.

## General Information

- **Postman Collection:** [Nerdmas Balls - Postman Collection](https://www.getpostman.com/collections/12e0b616-28f7-4449-9dc4-d26f20a7ae88)
- **Schema:** [Postman Collection Schema](https://schema.getpostman.com/json/collection/v2.1.0/collection.json)

## Endpoints

### 1. List Items

- **Name:** list
- **Method:** GET
- **Description:** Retrieves the list of items.
- **Request Parameters:**
  - None
- **Response:**
  - Code 200: List of items

### 2. Ping

- **Name:** ping
- **Method:** GET
- **Description:** Verifies connectivity with the server.
- **Request Parameters:**
  - None
- **Response:**
  - Code 200: Pong

### 3. Endpoint Not Found

- **Name:** endpoint not found
- **Method:** GET
- **Description:** Returns an error when the endpoint is not found.
- **Request Parameters:**
  - None
- **Response:**
  - Code 404: Endpoint not found

### 4. Delete Item

- **Name:** delete
- **Method:** GET
- **Description:** Deletes an item by ID.
- **Request Parameters:**
  - `id` (in the URL): Identifier of the item to delete
- **Response:**
  - Code 200: Item deleted successfully

### 5. Add Item

- **Name:** add
- **Method:** GET
- **Description:** Adds a new item.
- **Request Parameters:**
  - Item data in the request body
- **Response:**
  - Code 201: Item added successfully

### 6. Get by ID

- **Name:** getById
- **Method:** GET
- **Description:** Gets an item by its ID.
- **Request Parameters:**
  - `id` (in the URL): Identifier of the item to retrieve
- **Response:**
  - Code 200: Item found
  - Code 404: Item not found

### 7. Modify Item

- **Name:** modify
- **Method:** GET
- **Description:** Modifies an item by ID.
- **Request Parameters:**
  - `id` (in the URL): Identifier of the item to modify
  - Updated item data in the request body
- **Response:**
  - Code 200: Item modified successfully
  - Code 404: Item not found

**Note:** All endpoints not specifying headers or responses will follow standard conventions for a REST API. Ensure to include appropriate headers and handle responses as needed.

## MERN Stack and express-ts-jest-template Overview

## 1. MERN Stack

The MERN stack is a popular technology stack for building modern web applications. It consists of:

**MongoDB:**

- A NoSQL database that stores data in a flexible, JSON-like format. It is highly scalable and widely used for handling large amounts of data.

**Express.js:**

- A backend web application framework for Node.js that simplifies the development of robust and scalable APIs. It provides a set of features for building RESTful APIs and handling middleware.

**React:**

- A JavaScript library for building user interfaces. React allows for the creation of dynamic and interactive front-end components, providing a seamless user experience.

**Node.js:**

- A JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run server-side JavaScript and is the foundation for building scalable network applications.

**express-ts-jest-template Overview**

- The express-ts-jest-template is a project template or boilerplate for building RESTful APIs using the MERN stack. Here's a brief overview of the key components and toolkits used in the provided package.json file:

## 2. Key Scripts:

- **build:dev:** Runs TypeScript compiler in watch mode for development.
- **build:** Runs TypeScript compiler to build the project.
- **start:** Starts the application using the compiled JavaScript files.
- **start:dev:** Starts the application in watch mode for development.
- **test:** Runs Jest tests.
- **test:dev:** Runs Jest tests in watch mode.
- **test:coverage:** Runs Jest tests and generates code coverage reports.
- **prepare:** Installs Husky for Git hooks.

## 3. Key DevDependencies:

- **TypeScript (tsc):** A superset of JavaScript that adds static typing.
- **Jest:** A popular testing framework for JavaScript and TypeScript applications.
- **MongoDB Memory Server:** Provides an in-memory

  **MongoDB server for testing.**

- **Express:** The web application framework for building APIs.
- **ts-jest:** Allows Jest to work seamlessly with TypeScript.
- **Supertest:** A library for testing HTTP assertions.
- **Husky:** Enables Git hooks for running scripts before commits.
- **Linting and Formatting:** ESLint, Prettier, and lint-staged for maintaining code quality.

## 4. Key Dependencies:

- **Express Validation and Joi:** Used for request validation.
- **Mongoose:** An ODM (Object-Document Mapping) library for MongoDB and Node.js.

## 5. Engine Requirements:

- **Node.js** version must be greater than or equal to 18.18.0.
