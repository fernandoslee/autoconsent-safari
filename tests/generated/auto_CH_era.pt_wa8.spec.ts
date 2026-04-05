import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_era.pt_wa8', ['https://www.era.pt/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
