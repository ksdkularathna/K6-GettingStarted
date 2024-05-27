import http from 'k6/http';
import { sleep } from 'k6';

/**
 * vus       :  No of virtual users executing the default function.
 *              Default value is 1 if not specified.
 *       
 * iterations:  An Iteration means one complete execution cycle of default function.
 *              Iterations can not be less than the number of users.
 *              Iterations are shared among available users.
 *              Default value is 1 if not specified.
 * 
 * duration  :  K6 will try to start all the specified iterations by sharing them with specified users
 *              amount within this given duration.
 *              If k6 is unable to do this, then the iterations will be dropped.
 *              Default value is 30s if not specified.
 */

// init
export let options = {
  vus: 3,
  iterations: 3,
  duration: '2s' // K6 will try to execute 3 iterations sharing it with 3 users within 3 seconds
};

// vu script
export default function() {
  http.get('https://test.k6.io');
  sleep(4);
}