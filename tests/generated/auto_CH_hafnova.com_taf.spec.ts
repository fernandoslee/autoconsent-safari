import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hafnova.com_taf', ['https://www.hafnova.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
