import http from 'https://k6.io/http';
import { check, sleep, group } from 'https://k6.io/k6';

export let options = {
  stages: [
    { duration: '1m', target: 10 },  // Start with a small load (10 RPS)
    { duration: '1m', target: 500 },  // Gradually increase load (50 RPS)
    { duration: '2m', target: 2000 }, // Continue increasing load (100 RPS)
    { duration: '1m', target: 0 },   // Gradually reduce load to 0
  ],
};

export default function () {
  group('stress_test', function () {
    let response = http.get('http://35.209.212.46:5002');
    // let response1 = http.get('http://35.209.212.46:5005');
    // let response5 = http.get('http://35.209.212.46:5006');

    let response2 = http.get('http://35.209.212.46:5003/compute-prime-sum/1000');
    let response4 = http.get('http://35.209.212.46:5004/compute-prime-sum/1000');
    let response3 = http.get('http://35.209.212.46:5001/compute-prime-sum/1000');


    check(response, {
      'status is 200': (r) => r.status === 200,
    });
    // check(response1, {
    //     'status is 200': (r) => r.status === 200,
    //   });
    //   check(response5, {
    //     'status is 200': (r) => r.status === 200,
    //   });
    check(response3, {
      'status is 200': (r) => r.status === 200,
    });
    check(response2, {
      'status is 200': (r) => r.status === 200,
    });
    check(response4, {
        'status is 200': (r) => r.status === 200,
      });
  });

  sleep(1);
}
