export function phoneMask(value){
  const phoneNumber = value.replace(/\D/g, "")
  .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);

  value = !phoneNumber[2]
    ? phoneNumber[1]
    : `${phoneNumber[1]}-${phoneNumber[2]}${`${
      phoneNumber[3] ? `-${phoneNumber[3]}` : ""
      }`}${`${phoneNumber[4] ? `-${phoneNumber[4]}` : ""}`}`;
  return value;
}