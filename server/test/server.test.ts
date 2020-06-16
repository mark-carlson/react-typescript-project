import request from 'supertest';
import express from 'express';
import getPort from 'get-port';
import mockConsole from 'jest-mock-console';
import http from 'http';
import server from '../src/server';

jest.mock('../src/app', (): any =>
    express().get('/api/test', (req: any, res: any): void => {
        res.send('hello');
    }),
);

describe('server', (): void => {
    let httpServer: http.Server;
    let restoreConsole: any;
    let port: number;
    beforeAll(
        async (): Promise<void> => {
            restoreConsole = mockConsole();
            port = await getPort();
            process.env.PORT = `${port}`;
            httpServer = server.start();
            await new Promise((resolve): void => {
                httpServer.on('listening', resolve);
            });
        },
    );
    afterAll(
        async (): Promise<void> => {
            restoreConsole();
            await new Promise((resolve): void => {
                httpServer.close(resolve);
            });
        },
    );

    it('Starts up and serves requests', async (): Promise<void> => {
        expect(console.log).toHaveBeenCalledWith(`Server started at http://localhost:${port}`);
        await request(httpServer)
            .get('/api/test')
            .expect('hello');
    });
});

describe('port()', (): void => {
    it('Returns the proper value', (): void => {
        process.env.PORT = '';
        expect(server.port()).toBe(3001);
        process.env.PORT = '1234';
        expect(server.port()).toBe(1234);
    });
});
