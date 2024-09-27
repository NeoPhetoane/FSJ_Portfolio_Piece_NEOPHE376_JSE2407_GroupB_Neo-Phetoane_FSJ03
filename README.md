**E-Commerce Store**
Welcome to the E-Commerce Store, a modern, fully-featured e-commerce web application built with Next.js and Tailwind CSS. This project demonstrates how to build an interactive online store with essential e-commerce features like product listings, detailed product pages, pagination, a product image carousel, and robust error handling. The project leverages the power of Next.js for both server-side rendering and client-side interactivity.The store is a complete web application that provides an intuitive interface for users to browse, view, and purchase products. It also has sorting, filtering and search functionalities. 

**Essential features**

Dynamic Product Data: Fetched from a backend API.

Server-side Rendering: For better SEO and faster first-page loads.

Client-side Interactivity: Using React hooks such as useState and useEffect.

Error Handling: Robust user-friendly messages in case of any issues fetching data.

**Visual Features**

Home Page: Redirects users to the product listing page.

<img src="./public/Screenshot (220).png" alt="Home page" />

Product Listing with Pagination: View a paginated list of products with basic information like price, stock status, and image.

<img src="./public/Screenshot (222).png" alt="Pagination controls" />

Product Detail Page: View detailed information about a specific product, including a carousel of product images, reviews, price, category, stock, and rating.

<img src="./public/Screenshot (224).png" alt="Detail page" />

Image Carousel: A simple carousel that allows users to scroll through multiple images of a product.

<img src="./public/Screenshot (225).png" alt="Detail page" />

Error Handling: Displays user-friendly messages for API errors or failed product fetches.

<img src="./public/Screenshot (226).png" alt="Detail page" />

Responsive Design: The app is fully responsive, adapting to different screen sizes from mobile to desktop.

Search functionality: The user is able to type the name or partial words in the name and then see produicts that fit the word.

<img src="./public/Screenshot (232).png alt" alt="Search bar">

Filtering and Sorting: The user is able to filter by categpries and sort by price

<img src="./public/Screenshot (231).png" alt="Filter dropdown, sort dropdown and reset button">

Review Sort: The user is able to sort reviews by date and rating.

<img src="./public/Screenshot (230).png"  alt="Reviews sorting">


**Technologies Used**
Next.js: React framework for server-side rendering, static site generation, and dynamic routing.
React: JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for responsive and modern designs.
JavaScript: Core language for implementing client-side functionality.
API Fetching: Using native fetch for retrieving product data from an external API.
Project Structure


**The project follows a clean and simple structure for easy navigation and extensibility:**

app
├── components/
│   ├── BackButton.js        # Back button for navigation
│   ├── Carousel.js          # Carousel for product images
│   ├── ProductCard.js       # Card component for displaying products on listing page
│   ├── Pagination.js        # Pagination controls
├── product/[id]
│   ├── loading.js        
│   ├── products/
│   │   ├── page.js          # Dynamic product detail page 
├── products/             
|   ├── page.js              # Product Listing with pagination.   
├── README.md                # Project documentation



**Setup Instructions**
1. Before you begin, ensure you have Node.js installed

2. git clone https://github.com/NeoPhetoane/NEOPHE376_JSE2407_GroupB_Neo-Phetoane_FSJ01.git 

3. npm install

4. npm run dev

5. Open http://localhost:3000 in your browser to view the app.