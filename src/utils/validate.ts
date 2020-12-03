const isEmail = (email: string) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

const isPhoneNumber = (number: string) => {
  const phoneNumberRegex = /^[+]*[0-9]{1,4}[\s\./0-9]*$/;
  return phoneNumberRegex.test(number);
};

export { isEmail, isPhoneNumber };
