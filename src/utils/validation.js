import { phoneMask } from "./phoneMask";

function nameValidation(value, input) {
  let span
  const name = value.replace(/[^a-zA-Zа-яА-ЯёЁ .]/i, "").trimStart();
  if (name.length === 0) {
    span = `This field is empty`;
  } else {
    if (name[0] !== name[0].toUpperCase()) {
      span = `You should start the ${input} with a capital letter`;
    } else {
      span = "";
    }
  }
  return [name, span];
}

function dateValidation(value) {
  const date = value.replace(/^\d{1,2}\/\d{1,2}\/\d{4}$/, "");
  let span
  if (!date) {
    span = `This field is empty`;
  } else {
    span = "";
  }
  return [value, span];
}

function linkValidation(value) {
  const link = value.trimStart();
  let span;
  if (value.length === 0) {
    span = `This field is empty`;
  } else {
    if (value.substring(0, 8) !== "https://") {
      span = 'You should start the link with "https://';
    } else {
      span = "";
    }
  }
  return [link, span];
}

function phoneValidation(value) {
  const phone = phoneMask(value);
  let span;

  if (phone.length < 12) {
    span = "You should add all numbers";
  } else {
    span = "";
  }
  return [phone, span];
}

function textAreaValidation(value, name) {
  let span;
  const text = value.trimStart();

  if (text.length === 0) {
    span = "This field is empty";
  } else {
    if (text.length > 600) {
      span = "Exceeded Symbol Limit";
    } else {
      span = "";
    }
  }

  return [text, span];
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
let span;
if(value.length===0){
  span = "This field is empty";
}
return span;
}

