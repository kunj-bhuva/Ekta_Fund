// @ts-nocheck
// 
/**
 * @type {import('@stryker-mutator/api/core').PartialStrykerOptions}
 */
module.exports = {
    mutator: 'typescript', // Specify the mutator directly
    testRunner: 'jest', // Use Jest as the test runner
    reporters: ['progress', 'clear-text', 'html'], // Add desired report formats
    coverageAnalysis: 'off', // Use 'off' if you're not using per-test coverage
    mutate: [
      'src/**/*.ts', // Files to be mutated
      '!src/**/*.spec.ts', // Exclude test files
    ],
    jest: {
      // Inline Jest configuration
      projectType: 'custom',
      config: {
        testEnvironment: 'node', // Use 'node' or 'jsdom' based on your environment
        transform: {
          '^.+\\.ts$': 'ts-jest', // Ensure TypeScript files are handled
        },
        testMatch: ['**/*.spec.ts'], // Match test files with `.spec.ts` suffix
      },
    },
    thresholds: {
      high: 80, // Pass if mutation score is 80% or above
      low: 60, // Warn if mutation score is between 60% and 80%
      break: 50, // Fail if mutation score is below 50%
    },
  };
  