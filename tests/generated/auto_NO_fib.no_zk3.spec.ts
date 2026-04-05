import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_fib.no_zk3', ['https://www.fib.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
