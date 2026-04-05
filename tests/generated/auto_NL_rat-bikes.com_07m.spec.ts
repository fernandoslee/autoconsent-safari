import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rat-bikes.com_07m', ['https://rat-bikes.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
