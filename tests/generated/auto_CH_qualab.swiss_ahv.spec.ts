import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_qualab.swiss_ahv', ['https://www.qualab.swiss/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
