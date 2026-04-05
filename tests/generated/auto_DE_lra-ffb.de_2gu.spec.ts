import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lra-ffb.de_2gu', ['https://www.lra-ffb.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
