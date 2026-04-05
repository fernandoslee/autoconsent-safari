import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_gysinge.com_sde', ['https://www.gysinge.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
