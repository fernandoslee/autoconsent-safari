import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aluscout.de_oen', ['https://www.aluscout.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
