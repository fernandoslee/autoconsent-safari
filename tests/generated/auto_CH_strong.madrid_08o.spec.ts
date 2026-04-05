import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_strong.madrid_08o', ['https://strong.madrid/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
