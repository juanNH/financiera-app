/**
 * Round to two decimals, numbers with an non known aflter dot.
 * @param num Number to round. ex: 2,233333322323
 * @returns Number rounded, ex: 2,23
 */
function roundToTwoDecimals(num: number): number {
    return Math.round(num * 100) / 100;
}

export default roundToTwoDecimals;