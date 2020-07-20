
/**
 * Use an IFFIE if you want to have variable privacy
 */
(function () {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

/**
 * Want to add a argument to the function
 */

(function (goodLuck) {
    let score = Math.random() * 10 + goodLuck;
    console.log(score >= 5 );
})(2);