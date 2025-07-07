const {createDefaultPreset} = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
    testEnvironment: "node",
    transform: {
        ...tsJestTransformCfg,
    },
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts',
    ],
    coverageThreshold: {
        global: {
            branches: 20,
            functions: 20,
            lines: 20,
            statements: 20,
        }
    },
    coverageReporters: [   ["text", { file: "coverage.txt" }] ],
    testMatch: ["<rootDir>/test/**/*.spec.ts"]
};
