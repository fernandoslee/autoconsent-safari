import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fishfish.fr_uwt', ['https://www.fishfish.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
