const validationObject = {
  firstName: [
    {
      require: true,
      message: "Please enter your First Name",
    },
  ],
  lastName: [
    {
      require: true,
      message: "Please enter your Last Name",
    },
  ],
  email: [
    {
      require: true,
      message: "Please enter your email address",
    },
    {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter valid email",
    },
  ],
  password: [
    {
      require: true,
      message: "Please enter password",
    },
    {
      minlength: 6,
      message: "Password must not be less than 6 characters",
    },
  ],
  category: [
    {
      require: true,
      message: "Please select a category",
    },
  ],
}

export const validateForm = (userdata) => {
  //initalization of error Object
  const errors = {}

  Object.entries(validationObject).forEach(([key, value]) => {
    let isOneRuleSatisfied = false /// to check if any rule is satisfied if so skip other rules

    value.forEach((rule) => {
      if (rule.require && !userdata[key]) {
        errors[key] = rule.message
        isOneRuleSatisfied = true
      } else if (
        !isOneRuleSatisfied &&
        rule.regex &&
        !rule.regex.test(userdata[key])
      ) {
        errors[key] = rule.message
        isOneRuleSatisfied = true
      } else if (userdata[key].length < rule.minlength) {
        errors[key] = rule.message
      }
    })
  })

  return errors
}
