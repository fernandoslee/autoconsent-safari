import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stekkerdeal.nl_msd', ['https://stekkerdeal.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
