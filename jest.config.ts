import { Config } from '@jest/types'

const options: Config.InitialOptions = {
  preset: 'ts-jest',

  testEnvironment: 'node',

  testTimeout: 10000,

  roots: ['<rootDir>/tests'],

  testRegex: '.test.tsx?$',

  globals: {
    // mock injected build variables. See DefinePlugin options on webpack configuration files.
    __PRODUCTION__: true,
    __SERVER__: true
  },

  moduleNameMapper: {
    '^client/(.*)$': '<rootDir>/client/$1'
  }
}

export default options
