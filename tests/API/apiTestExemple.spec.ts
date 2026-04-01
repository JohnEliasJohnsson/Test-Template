import {test, expect} from "@playwright/test";

test("api GET test exemple", async ({request}) => {
    const response = await request.get("https://reqbin.com/api/v1/account/userinfo");
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toEqual({})
})