import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_radar-prive.fr_dza', ['https://radar-prive.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
