module.exports = {
    roots: ['<rootDir>/src'],
    transform: { '^.+\\.tsx?$': 'ts-jest' },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    testMatch: ['<rootDir>/src/**/*.spec.(ts|tsx)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
