import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_neeser.swiss_xcp', ['https://neeser.swiss/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
