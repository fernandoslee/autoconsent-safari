import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_quinfall.com_edv', ['https://www.quinfall.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
