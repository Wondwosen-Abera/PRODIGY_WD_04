let form = $(".form");
//console.log(form)

form.validate({
  errorElement: "span",
  rules: {
    name: "required",
    email: {
      required: true,
      email: true,
    },
    phone: "required",
    text: "required",
  },
  messages: {
    name: "Please provide your name",
    email: {
      required: "Please, type your e-mail",
      email: "Please, type a valid email",
    },
    phone: "Please enter your contact number",
    text: "Please write your message",
  },
});
