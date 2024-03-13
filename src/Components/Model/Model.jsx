const Model = {
  Username: {
    type: "string",
    required: "Please enter your username",
    placeholder: "Enter your username",
    minLength: {
      value: 4,
      message: "Username must be at least 4 characters long",
    },
    maxLength: {
      value: 20,
      message: "Username should be less than 20 characters",
    },
    pattern: {
      value: "^[a-zA-Z0-9]+(?:[_/-/.][a-zA-Z0-9]+)*$",

      message: "Please enter a valid username",
    },
  },
  Email: {
    type: "email",
    required: "Please enter your email address",
    placeholder: "Enter your email address",
    maxLength: {
      value: 64,
      message: "Email must be less than 64 characters",
    },
    pattern: {
      value: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
      message: "Invalid Email. Please provide a valid email",
    },
  },

  Password: {
    type: "password",
    required: "Please enter your password",
    placeholder: "Enter your password",
    minLength: {
      value: 8,
      message:
        "Password must be at least 8 characters long, must include a capital and small letter and a numeric and special character",
    },
    maxLength: {
      value: 16,
      message: "Password must be less than 64 characters",
    },
    pattern: {
      value: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()-_+=]).*$",
      message:
        "Invalid password. Password must be at least 8 characters long, must include a capital and small letter and a numeric and special character",
    },
  },

  ProductName: {
    type: "string",
    required: "Please enter the product name",
    placeholder: "Enter the product name",
    minLength: {
      value: 4,
      message: "Product name must be at least 4 characters long",
    },
    maxLength: {
      value: 50,
      message: "Product name should be less than 50 characters",
    },
  },
  ProductDescription: {
    type: "string",
    required: "Please enter the product description",
    placeholder: "Enter the product description",
    minLength: {
      value: 10,
      message: "Product description must be at least 10 characters long",
    },
    maxLength: {
      value: 200,
      message: "Product description should be less than 200 characters",
    },
  },
  ProductAmount: {
    type: "number",
    required: "Please enter the product amount",
    placeholder: "Enter the product amount",
    min: {
      value: 0,
      message: "Product amount must be greater than or equal to 0",
    },
    max: {
      value: 10000,
      message: "Product amount should be less than or equal to 10,000",
    },
  },
};

export default Model;
