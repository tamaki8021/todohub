import HTMLReactParser from "html-react-parser";

/**
 * Convert Carriage Return and Line Feed into <br> tag.
 * @param {string} text The row text
 * @returns {void | string | never} The formatted text
 */
export const returnCodeToBr = (text: string) => {
  if (text === "") {
      return text
  } else {
      return HTMLReactParser(text.replace(/\r?\n/g, '<br/>'))
  }
};

/**
 * Validate input email
 * @param email
 * @returns {boolean}
 */
export const isValidEmailFormat = (email: string) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regex.test(email)
}


/**
* Show an alert if required input is blank
* @param args Required input values
* @returns {boolean}
*/
export const isValidRequiredInput = (...args: any) => {
  let validator = true;
  for (let i=0; i < args.length; i=(i+1)|0) {
      if (args[i] === "") {
          validator = false;
      }
  }
  return validator
};