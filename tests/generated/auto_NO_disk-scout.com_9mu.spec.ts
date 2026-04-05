import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_disk-scout.com_9mu', ['https://disk-scout.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
