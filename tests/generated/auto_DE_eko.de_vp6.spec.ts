import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eko.de_vp6', ['https://eko.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
