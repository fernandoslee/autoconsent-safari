import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tarot.nl_3f9', ['https://www.tarot.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
