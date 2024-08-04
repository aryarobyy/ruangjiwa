// import { handler } from "@/app/api/article"
// import {createMoc}
import { createMocks } from "node-mocks-http";
import articleHandler from "../app/api/article/index";
import request from "supertest"

describe('Artikel endpoint testing', () => {
    it('should return string', async () => {
        // const res = await request(articleHandler).get('/api/article');
        const { req, res} = createMocks();

        // /api/article
        await articleHandler(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(res._getJSONData().message).toBe("Hello world!");
     })
})