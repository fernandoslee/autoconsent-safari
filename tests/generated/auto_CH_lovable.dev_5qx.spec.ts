import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lovable.dev_5qx', ['https://lovable.dev/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
