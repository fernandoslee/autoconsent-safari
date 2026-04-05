import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dsm.museum_fjl', ['https://www.dsm.museum/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
