import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hgmotors.de_ke3', ['https://hgmotors.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
