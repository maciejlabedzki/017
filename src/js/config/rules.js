const Rules = props => {
  // Contact
  if (props.page === "Contact" && props.statePage === "contact") {
    return true;
  }

  // Register
  if (props.page === "Register" && props.statePage === "register") {
    return true;
  }

  // search
  if (props.page === "Search" && props.statePage === "search") {
    return true;
  }

  // User : true
  if (props.page === "user" && props.statePage === "user") {
    return true;
  }

  // favourite
  if (props.page === "Favourite" && props.statePage === "favourite") {
    return true;
  }

  return false;
};

export default Rules;
