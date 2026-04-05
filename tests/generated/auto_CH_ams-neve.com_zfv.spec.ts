import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ams-neve.com_zfv', ['https://www.ams-neve.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
