import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ssvp.fr_ybx', ['https://www.ssvp.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
