import Axios, { AxiosResponse, AxiosError } from 'axios';

describe("Server", () => {
    beforeAll(() => {

    });
    afterAll(() => {

    });
    describe("GET /", () => {
        var data: any = {};
        beforeAll(async (done) => {
            const response = await Axios.get("http://localhost:8080/")
            data.status = response.status;
            data.body = response.data;
            done();
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body).toBe("TEST API");
        });
    });
    describe("GET /test", () => {
        var data: any = {};
        beforeAll((done) => {
            const response = Axios.get("http://localhost:8080/test").then((response: AxiosResponse) => {
                data.status = response.status;
                data.body = response.data;
                done();
            }).catch((error: AxiosError) => {
                if (error.response) {
                    data.status = error.response.status;
                    data.body = error.response.data;
                }
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(500);
        });
        it("Body", () => {
            expect(data.body.message).toBe("This is an error response");
        });
    });
});