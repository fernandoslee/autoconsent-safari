import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lauenburg.de_yw4', ['https://www.lauenburg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
