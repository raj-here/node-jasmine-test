import { server } from '../../../server/app';
import Axios from 'axios';

describe("User Controller", () => {
    beforeAll(() => {

    });
    afterAll(() => {
        server.close();
    });
    describe("GET All Users /", () => {
        var data: any = {};
        beforeAll(async (done) => {
            const response = await Axios.get("http://localhost:8080/users")
            data.status = response.status;
            data.body = response.data;
            done();
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body).toBeInstanceOf(Array);
        });
    });

    // describe("Create User /createUser", () => {
//     var data: any = {};
//     beforeAll((done) => {
//         // Request.post("http://localhost:8080/test", (error, response, body) => {
//         //     data.status = response.statusCode;
//         //     data.body = JSON.parse(body);
//         //     done();
//         // });
//         // Request.post("http://localhost:8080/createUser", (
//     });
//     it("Status 200", () => {
//         expect(data.status).toBe(500);
//     });
//     it("Body", () => {
//         expect(data.body.message).toBe("This is an error response");
//     });
// });
});