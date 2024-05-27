import http from 'k6/http';

/**
 * vus       :  No of virtual users executing the default function.
 *              Default value is 1 if not specified.
 *       
 * iterations:  An Iteration means one complete execution cycle of default function.
 *              Iterations can not be less than the number of users.
 *              Iterations are shared among available users.
 *              Default value is 1 if not specified.
 */

// init
export let options = {
  vus: 2,
  iterations: 4, // 4 iterations are shared among 2 users by K6 and the load test finishes when 4 iterations are completed
};

// vu script
export default function() {
  http.get('https://test.k6.io');
}
