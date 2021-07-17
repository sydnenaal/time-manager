module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    clearMocks: true,
    resetModules: true,
    testPathIgnorePatterns: ['/node_modules/', '/static/'],
    transform: { '^.+\\.ts?$': 'ts-jest' },
    moduleFileExtensions: ['ts', 'js'],
}
