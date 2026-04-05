import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_garnwelt.de_bud', ['https://www.garnwelt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
