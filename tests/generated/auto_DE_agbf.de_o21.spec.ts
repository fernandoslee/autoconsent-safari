import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_agbf.de_o21', ['https://www.agbf.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
