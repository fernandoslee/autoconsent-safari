import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ivao.fr_ry9', ['https://www.ivao.fr/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
