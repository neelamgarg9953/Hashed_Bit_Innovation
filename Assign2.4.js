// Ques- 4 That calculates the sum of the products of corresponding digits of two numbers:


function sumOfProducts(n1, n2) {
    let sum = 0;
    let strN1 = n1.toString();
    let strN2 = n2.toString();
    let maxLength = Math.max(strN1.length, strN2.length);

    for (let i = 0; i < maxLength; i++) {
        let digitN1 = parseInt(strN1[strN1.length - 1 - i]) || 0;
        let digitN2 = parseInt(strN2[strN2.length - 1 - i]) || 0;
        sum += digitN1 * digitN2;
    }

    return sum;
}

console.log(sumOfProducts(53, 62));
