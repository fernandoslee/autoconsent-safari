import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_quodlibet.it_mss', ['https://www.quodlibet.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
