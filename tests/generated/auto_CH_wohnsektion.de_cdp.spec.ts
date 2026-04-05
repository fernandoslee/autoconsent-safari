import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wohnsektion.de_cdp', ['https://wohnsektion.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
