import { phoneMask } from "./phoneMask";

function nameValidation(value, input) {
  const span = document.querySelector(`.error-${input}`);
  const name = value.replace(/[^a-zA-Zа-яА-ЯёЁ .]/i, "").trimStart();
  if (name.length === 0) {
    span.textContent = `This field is empty`;
  } else {
    if (name[0] !== name[0].toUpperCase()) {
      span.textContent = `You should start the ${input} with a capital letter`;
    } else {
      span.textContent = "";
    }
  }
  return name;
}

function dateValidation(value) {
  const date = value.replace(/^\d{1,2}\/\d{1,2}\/\d{4}$/, "");
  const span = document.querySelector(`.error-date`);
  if (!date) {
    span.textContent = `This field is empty`;
  } else {
    span.textContent = "";
  }

  return value;
}

function linkValidation(value) {
  const link = value.trimStart();
  const span = document.querySelector(`.error-link`);
  if (value.length === 0) {
    span.textContent = `This field is empty`;
  } else {
    if (value.substring(0, 8) !== "https://") {
      span.textContent = 'You should start the link with "https://';
    } else {
      span.textContent = "";
    }
  }
  return link;
}

function phoneValidation(value) {
  const phone = phoneMask(value);
  const span = document.querySelector(".error-phone");

  if (phone.length < 12) {
    span.textContent = "You should add all numbers";
  } else {
    span.textContent = "";
  }
  return phone;
}

function textAreaValidation(value, name) {
  const span = document.querySelector(`.error-${name}`);
  const text = value.trimStart();

  if (text.length === 0) {
    span.textContent = "This field is empty";
  } else {
    if (text.length > 600) {
      span.textContent = "Exceeded Symbol Limit";
    } else {
      span.textContent = "";
    }
  }

  return text;
}

export function chooseValidation(name, target) {
  let value;
  switch (name) {
    case "name":
      value = nameValidation(target, "name");
      break;

    case "surname":
      value = nameValidation(target, "surname");
      break;

    case "date":
      value = dateValidation(target);
      break;

    case "phone":
      value = phoneValidation(target);
      break;
    case "link":
      value = linkValidation(target);
      break;

    case "about":
      value = textAreaValidation(target, 'about');
      break;

    case "stack":
      value = textAreaValidation(target, 'stack');
      break;

    case "project":
      value = textAreaValidation(target, 'project');
      break;

    default:
      return target;
  }
  return value;
}

export function blurValidation(value, name){
const span = document.querySelector(`.error-${name}`);
if(value.length===0){
  span.textContent = "This field is empty";
}
}

export function submitValidation(name, value) {
  const span = document.querySelector(`.error-${name}`);
  if(value.length===0){
    span.textContent = "This field is empty";
  }

}

export function resetErrors(){
  const span = document.querySelectorAll(`.error`);
  span.forEach(el => el.textContent='')
}

export function changeValidation() {
  const spans = document.querySelectorAll('.error');
  let errors = [];
  spans.forEach(el => errors.push(el.textContent));
  errors = errors.filter(el => el !== '').length;
  return errors;
}