/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./src/setupTest.ts"],
  testMatch: ["**/src/**/*.test.ts"],
  resolver: "jest-ts-webcompat-resolver",
  collectCoverageFrom: [
    "**/src/**/*.ts",
    "!src/index.ts",
    "!src/server/app.ts",
    "!src/database/index.ts",
    "src/setupTest.ts",
  ],
};
