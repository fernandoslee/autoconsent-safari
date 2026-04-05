import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zmo.de_qfy', ['https://www.zmo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
