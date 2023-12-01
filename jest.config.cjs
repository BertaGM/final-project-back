/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.ts"],
  resolver: "jest-ts-webcompat-resolver",
  collectCoverageFrom: [
    "**/*.ts",
    "!**/node_modules/**",
    "!/src/index.ts",
    "!src/setupTest.ts",
    "!src/server/app.ts",
  ],
};
