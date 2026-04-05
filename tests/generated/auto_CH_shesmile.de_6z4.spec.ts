import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_shesmile.de_6z4', ['https://shesmile.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
