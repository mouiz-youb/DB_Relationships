// swagger.js
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mini Social Media API",
      version: "1.0.0",
      description: "API documentation for posts and comments (mini social media app).",
    },
    servers: [
      {
        url: "http://localhost:3000", // update if your base URL is different
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }], // all routes secured unless you remove
  },
   apis: ["./src/router/*.js"] // scans your route files for @swagger comments
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
