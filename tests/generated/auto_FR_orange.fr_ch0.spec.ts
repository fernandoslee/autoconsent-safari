import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_orange.fr_ch0', ['https://www.orange.fr/portail'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
