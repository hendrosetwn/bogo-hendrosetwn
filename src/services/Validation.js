export const Validation = {
    required: (el, value, msg) => {
      const element = document.querySelector(`#${el}`);
      const message = element.nextElementSibling;
  
      if (value === "" || value === null) {
        message.innerText = msg;
        return false;
      } else {
        message.innerText = "";
        return true;
      }
    },
  
    isEqual: (el, value, msg) => {
      const element = document.querySelector(`#${el}`);
      const message = element.nextElementSibling;
  
      if (value[0] === value[1]) {
        message.innerText = "";
        return true;
      } else {
        message.innerText = msg;
        return false;
      }
    },
  
    isChecked: (el, value, msg) => {
      const element = document.querySelector(`#${el}`);
      const message = element.parentElement.nextElementSibling;
  
      if (!value) {
        message.innerText = msg;
        return false;
      } else {
        message.innerText = "";
        return true;
      }
    },
  };
  