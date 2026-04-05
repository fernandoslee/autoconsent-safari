import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vibragame.org_wj3', ['https://vibragame.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
