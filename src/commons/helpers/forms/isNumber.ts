/**
 * Function to help forms to validate if is it a number
 * @param msg msg to return if error
 * @param numberToCheck string to check if its a number
 * @returns true if its all right or the msg if it is not
 */

export function isNumber(msg: string, numberToCheck: string): string | boolean {
    const num = parseFloat(numberToCheck);
    if (isNaN(num)) {
        return msg;
    }
    return true;
}