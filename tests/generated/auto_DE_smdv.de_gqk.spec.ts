import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_smdv.de_gqk', ['https://www.smdv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
