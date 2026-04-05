import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_basari.de_qb4', ['https://www.basari.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
