import http from "k6/http";
import { check, sleep, group } from "k6";
import { Trend } from "k6/metrics";

export let options = {
  vus: 1,
  iterations: 10,
};

const waitingTimeTrend = new Trend("group_waiting_time_trend");

export default function () {
  group("This is a group", function () {
    const startTime = Date.now();

    const res1 = http.get("https://test.k6.io");
    check(res1, {
      "is status 200": (r) => r.status === 200,
      "is not status 404": (r) => r.status !== 404,
    });

    const res2 = http.get("https://test.k6.io");
    check(res2, {
      "is status 200": (r) => r.status === 200,
      "is not status 404": (r) => r.status !== 404,
    });

    sleep(1);

    waitingTimeTrend.add(Date.now() - startTime);
  });
}
