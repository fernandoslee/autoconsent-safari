import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_playboytv.eu_o86', ['https://www.playboytv.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
