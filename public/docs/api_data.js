define({ "api": [
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
            "description": "<p>username of the User</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User</p>"
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
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User information(_id, username, mobileNumber)</p>"
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
    "url": "/api/orders",
    "title": "Create Order (User)",
    "name": "Create_Order__User_",
    "group": "Orders",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>userInfo of the Given Order</p>"
          },
          {
            "group": "body",
            "type": "array",
            "optional": false,
            "field": "OrderedProduct",
            "description": "<p>Products Info of the Given Order</p>"
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
            "field": "user",
            "description": "<p>userInfo of the Given Orders</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "OrderedProduct",
            "description": "<p>ProductsInfo of the Given Order</p>"
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
    "filename": "src/api/Order/order.route.js",
    "groupTitle": "Orders"
  },
  {
    "type": "delete",
    "url": "/api/orders/admin/:OrderId",
    "title": "Delete a Order (Admin)",
    "name": "Delete_a_Order__Admin_",
    "group": "Orders",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "OrderId",
            "description": "<p>_id of a Order</p>"
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
            "description": "<p>OrderId of Order</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>UserInfo of the deleted Order</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "OrderedProduct",
            "description": "<p>OrderInfo of the deleted Order</p>"
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
    "filename": "src/api/Order/order.route.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/api/orders/admin/:OrderedId",
    "title": "Get a specific Order Info (Admin)",
    "name": "Get_OrderInfo__Admin_",
    "group": "Orders",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "string",
            "optional": false,
            "field": "OrderedId",
            "description": "<p>_id of the Order</p>"
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
            "description": "<p>Id of the Order</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>userInfo of the Given Orders</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "OrderedProduct",
            "description": "<p>ProductInfo of the Given Order</p>"
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
    "filename": "src/api/Order/order.route.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/api/orders/:OrderedId",
    "title": "Get a specific OrderInfo (User)",
    "name": "Get_Order__User_",
    "group": "Orders",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "string",
            "optional": false,
            "field": "OrderedId",
            "description": "<p>_id of the Order</p>"
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
            "description": "<p>Id of the Order</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>userInfo of the Given Order</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "OrderedProduct",
            "description": "<p>ProductInfo of the Given Order</p>"
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
    "filename": "src/api/Order/order.route.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/api/orders/admin",
    "title": "Get Order List (Admin)",
    "name": "Get_Order_list__Admin_",
    "group": "Orders",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Order[]",
            "description": "<p>List of Order.</p>"
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
    "filename": "src/api/Order/order.route.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/api/orders",
    "title": "Get Order List (User)",
    "name": "Get_Order_list__User_",
    "group": "Orders",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Order[]",
            "description": "<p>List of Order</p>"
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
    "filename": "src/api/Order/order.route.js",
    "groupTitle": "Orders"
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
    "type": "post",
    "url": "/api/products/admin",
    "title": "Create Products (Admin)",
    "name": "Create_Products__Admin_",
    "group": "Products",
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
            "type": "array",
            "optional": false,
            "field": "measure",
            "description": "<p>measurement of the product</p>"
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
            "type": "boolean",
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
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the Product</p>"
          },
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
            "type": "array",
            "optional": false,
            "field": "measure",
            "description": "<p>measurement of the product</p>"
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
    "groupTitle": "Products"
  },
  {
    "type": "delete",
    "url": "/api/products/admin/:productId",
    "title": "Delete a Product (Admin)",
    "name": "Delete_Product__Admin_",
    "group": "Products",
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
            "description": "<p>ProductId of Product</p>"
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
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/api/products/admin/:productId",
    "title": "Get a specific product Details for (Admin)",
    "name": "Get_Product_Details__Admin_",
    "group": "Products",
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
            "description": "<p>Id of the Product</p>"
          },
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
            "type": "array",
            "optional": false,
            "field": "measure",
            "description": "<p>measurement of the product</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
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
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/api/products/:productId",
    "title": "Get A Specific Product Details (User)",
    "name": "Get_Product_Details__User_",
    "group": "Products",
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
            "description": "<p>Id of the Product</p>"
          },
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
            "type": "array",
            "optional": false,
            "field": "measure",
            "description": "<p>measurement of the product</p>"
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
            "type": "boolean",
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
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/api/products/admin",
    "title": "Get Product List (Admin)",
    "name": "Get_Product_list__Admin_",
    "group": "Products",
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
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/api/products",
    "title": "Get Products List (User)",
    "name": "Get_Product_list__User_",
    "group": "Products",
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
    "groupTitle": "Products"
  },
  {
    "type": "put",
    "url": "/api/products/admin/:productId",
    "title": "Update a Product (Admin)",
    "name": "Update_Product__Admin_",
    "group": "Products",
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
            "type": "array",
            "optional": false,
            "field": "measure",
            "description": "<p>measurement of the product</p>"
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
            "type": "boolean",
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
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Id of the Product</p>"
          },
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
            "type": "array",
            "optional": false,
            "field": "measure",
            "description": "<p>measurement of the product</p>"
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
            "type": "boolean",
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
    "groupTitle": "Products"
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
