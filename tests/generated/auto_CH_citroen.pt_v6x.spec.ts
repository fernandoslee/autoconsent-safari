import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_citroen.pt_v6x', ['https://www.citroen.pt/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
