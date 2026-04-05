import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_numihfrance.fr_52o', ['https://numihfrance.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
