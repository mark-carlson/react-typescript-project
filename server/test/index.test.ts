jest.mock('../src/server', (): any => ({ start: jest.fn() }));

it('Starts the server', (): void => {
    require('../src/index');
    expect(require('../src/server').start).toHaveBeenCalled();
});
