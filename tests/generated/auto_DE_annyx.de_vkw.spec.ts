import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_annyx.de_vkw', ['https://www.annyx.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
