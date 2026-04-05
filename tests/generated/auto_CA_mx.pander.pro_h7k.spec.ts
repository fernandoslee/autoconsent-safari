import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_mx.pander.pro_h7k', ['https://mx.pander.pro/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
