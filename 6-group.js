import http from "k6/http";
import { check, sleep } from "k6";
import { group } from 'k6';

export default function () {
  group("This is group 1", function () {
    const res = http.get("http://echo.jsontest.com/key/value/one/two/three");
    check(res, {
      "is status 200": (r) => r.status === 200,
      "is not status 404": (r) => r.status !== 404,
      "has one": (r) => r.body.includes("one"),
    });

    sleep(1);
  });

  group("This is group 2", function () {
    const res = http.get("https://test.k6.io");
    check(res, {
      "is status 200": (r) => r.status === 200,
      "is not status 404": (r) => r.status !== 404
    });

    sleep(1);
  });
}
