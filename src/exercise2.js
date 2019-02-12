// Exercise 2
// complete the function

/**
 * With a given amount of miliseconds (first argument) 
 * @param {Number} timeout
 * 
 * any amount of functions (2nd, 3rd, etc. arguments)
 * @param {...Function:Promise<*>|*} fns any sync/async functions 
 * 
 * it returns a Promise 
 * @returns {Promise.<Array>} results of <fns> call

 * 1. is rejected after <timeout> of ms
 * 2. resolves with an array of fn() results. When fn() returns a promise, it must wait for it's resolution
 * 
 */
export default function(timeout, ...fns) {
  //TODO: put your code here
}
