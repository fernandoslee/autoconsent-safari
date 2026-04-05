import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cliprise.app_wba', ['https://www.cliprise.app/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
