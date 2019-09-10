define({ "api": [
  {
    "type": "get",
    "url": "/api",
    "title": "Health Check",
    "name": "Health_Check",
    "group": "API",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "OK",
            "description": "<p>Success Response</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error Response</p>"
          }
        ]
      }
    },
    "filename": "src/index.route.js",
    "groupTitle": "API"
  },
  {
    "description": "<p>Mounts auth routes at /auth</p>",
    "group": "Auth",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/index.route.js",
    "groupTitle": "Auth",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "User Login",
    "name": "User_Login",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT token</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/auth/auth.route.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/product/admin",
    "title": "Create Products (Admin)",
    "name": "Admin_Post_Product",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "vendors",
            "description": "<p>vendors of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "stock",
            "description": "<p>stock of one product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "expires",
            "description": "<p>expire Date of the product</p>"
          },
          {
            "group": "body",
            "type": "array",
            "optional": false,
            "field": "variant",
            "description": "<p>variant of product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>offer of product</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "vendors",
            "description": "<p>vendors of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "stock",
            "description": "<p>stock of one product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "expires",
            "description": "<p>expire Date of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "variant",
            "description": "<p>variant of product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>offer of product</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/product/product.route.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/product/admin",
    "title": "GET Product List (Admin)",
    "name": "Admin_Product_list",
    "group": "Product",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products[]",
            "description": "<p>List of product.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/product/product.route.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/product/{productId}/admin",
    "title": "Update a Product (Admin)",
    "name": "Admin_Update_Product",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "string",
            "optional": false,
            "field": "productId",
            "description": "<p>_id of Product</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "vendors",
            "description": "<p>vendors of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "stock",
            "description": "<p>stock of one product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "expires",
            "description": "<p>expire Date of the product</p>"
          },
          {
            "group": "body",
            "type": "array",
            "optional": false,
            "field": "variant",
            "description": "<p>variant of product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>offer of product</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "vendors",
            "description": "<p>vendors of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "stock",
            "description": "<p>stock of one product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "expires",
            "description": "<p>expire Date of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "variant",
            "description": "<p>variant of product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>offer of product</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/product/product.route.js",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/api/product/:productId/admin",
    "title": "Delete a Product (Admin)",
    "name": "Delete_Product__Admin_",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>_id of a Product</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of Product obejct</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Product</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/product/product.route.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/product/:productId",
    "title": "Get product",
    "name": "Get_Product",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "string",
            "optional": false,
            "field": "productId",
            "description": "<p>_id of Product</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of newly created property Object</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "vendors",
            "description": "<p>vendors of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "stock",
            "description": "<p>stock of one product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "expires",
            "description": "<p>expire Date of the product</p>"
          },
          {
            "group": "body",
            "type": "array",
            "optional": false,
            "field": "variant",
            "description": "<p>variant of product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>offer of product</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/product/product.route.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/product/:productId/admin",
    "title": "Get product  Details for Admin",
    "name": "Get_Product_Admin",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "string",
            "optional": false,
            "field": "productId",
            "description": "<p>_id of Product</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of newly created property Object</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "vendors",
            "description": "<p>vendors of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "stock",
            "description": "<p>stock of one product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "expires",
            "description": "<p>expire Date of the product</p>"
          },
          {
            "group": "body",
            "type": "array",
            "optional": false,
            "field": "variant",
            "description": "<p>variant of product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>offer of product</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/product/product.route.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/product",
    "title": "POST Products (Admin)",
    "name": "Product",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "vendors",
            "description": "<p>vendors of the product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "stock",
            "description": "<p>stock of one product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "expires",
            "description": "<p>expire Date of the product</p>"
          },
          {
            "group": "body",
            "type": "array",
            "optional": false,
            "field": "variant",
            "description": "<p>variant of product</p>"
          },
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>offer of product</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "vendors",
            "description": "<p>vendors of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "stock",
            "description": "<p>stock of one product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "expires",
            "description": "<p>expire Date of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "variant",
            "description": "<p>variant of product</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "offer",
            "description": "<p>offer of product</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/product/product.route.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/product",
    "title": "GET Products List (User)",
    "name": "User_Product_list",
    "group": "Product",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "products[]",
            "description": "<p>List of product.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/product/product.route.js",
    "groupTitle": "Product"
  },
  {
    "description": "<p>Mounts product routes at /products</p>",
    "group": "Products",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/index.route.js",
    "groupTitle": "Products",
    "name": ""
  },
  {
    "description": "<p>Mounts user routes at /users</p>",
    "group": "User",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/index.route.js",
    "groupTitle": "User",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/users",
    "title": "Create User",
    "name": "Create_User",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of user</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users",
            "description": "<p>List of users</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/user/user.route.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/users/:userId",
    "title": "Delete User",
    "name": "Delete_User",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>_id of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Deleted user details</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/user/user.route.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:userId",
    "title": "Get User",
    "name": "Get_User",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>_id of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Details of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/user/user.route.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "List Users",
    "name": "List_Users",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>List of users</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/user/user.route.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/users/:userId",
    "title": "Update User",
    "name": "Update_User",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>_id of user</p>"
          }
        ],
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile number of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "users",
            "description": "<p>List of users</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "src/api/user/user.route.js",
    "groupTitle": "User"
  }
] });
