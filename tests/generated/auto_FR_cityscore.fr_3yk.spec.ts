import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cityscore.fr_3yk', ['https://www.cityscore.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
