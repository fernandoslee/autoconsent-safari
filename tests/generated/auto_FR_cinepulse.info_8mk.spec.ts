import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cinepulse.info_8mk', ['https://cinepulse.info/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
