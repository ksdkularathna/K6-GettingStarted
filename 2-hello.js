import http from 'k6/http';
import { sleep } from 'k6';

// init
export let options = {
  vus: 2,
  iterations: 4,
};

// vu script
export default function() {
  http.get('https://test.k6.io');
  sleep(1);  
}
