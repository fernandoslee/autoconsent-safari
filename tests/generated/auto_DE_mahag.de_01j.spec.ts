import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mahag.de_01j', ['https://www.mahag.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
