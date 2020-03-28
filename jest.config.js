const path = require('path');

function getProjectConfig(projectName, additionalSetupFiles = []) {
  return {
    displayName: projectName,
    rootDir: path.join(process.cwd(), 'packages', projectName),
    setupFiles: [path.resolve(__dirname, 'config/jest/enzyme.ts'), ...additionalSetupFiles],
    setupFilesAfterEnv: [path.resolve(__dirname, 'config/jest/testingLibrary.ts')],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.s?css$': path.resolve(__dirname, 'config/jest/cssTransform.ts'),
    },
    moduleNameMapper: {
      '^react-ocean-forms$': '<rootDir>/../react-ocean-forms/src',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
  };
}

module.exports = {
  projects: [
    getProjectConfig('react-ocean-forms'),
    getProjectConfig('react-ocean-forms-bootstrap', [
      '<rootDir>/src/utils/registerCustomMessages.ts',
    ]),
    getProjectConfig('react-ocean-forms-react-intl'),
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,mjs,ts,tsx}',
    '!<rootDir>/src/**/*.types.{ts,tsx}',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/test-utils/**',
  ],
  coverageDirectory: './coverage',
};
