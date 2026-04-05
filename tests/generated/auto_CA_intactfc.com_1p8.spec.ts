import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_intactfc.com_1p8', ['https://www.intactfc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
