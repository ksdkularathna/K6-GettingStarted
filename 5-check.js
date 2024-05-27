import http from "k6/http";
import { check, sleep } from "k6";

export default function () {
    const res = http.get("http://echo.jsontest.com/key/value/one/two/three");

    check(res, {
        'is status 200': r => r.status === 200,
        'is not status 404': r => r.status !== 404,
        'has one': r => r.body.includes("one")
    });

    sleep(1);
}