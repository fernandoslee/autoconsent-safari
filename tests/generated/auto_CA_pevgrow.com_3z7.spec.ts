import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pevgrow.com_3z7', ['https://pevgrow.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
