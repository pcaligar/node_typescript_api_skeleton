/** @type {import('ts-jest/dist/types').InitialOptions} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/modules/**/*.ts",
    "!src/app/**/*.ts",
    "!src/modules/shared/**/*.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
  },
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
};
