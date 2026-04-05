import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arera.it_38u', ['https://www.arera.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
