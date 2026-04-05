import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hair24.de_6m3', ['https://www.hair24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
