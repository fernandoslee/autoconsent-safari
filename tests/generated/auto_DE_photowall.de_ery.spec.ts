import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_photowall.de_ery', ['https://www.photowall.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
