import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pharma365.fr_xmf', ['https://www.pharma365.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
