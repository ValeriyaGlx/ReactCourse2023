import { phoneMask } from "./phoneMask";

function nameValidation(value) {
  return value.replace(/[^a-zA-Zа-яА-ЯёЁ .]/i, "");
}

export function chooseValidation(name, target) {
  let value;
  switch (name) {
    case "name":
      value = nameValidation(target);
      break;

    case "surname":
      value = nameValidation(target);
      break;

    case "phone":
      value = phoneMask(target);
      break;

    default:
      return target;
  }
  return value;
}
