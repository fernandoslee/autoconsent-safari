import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_primarmi.it_pxt', ['https://primarmi.it/it-it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
