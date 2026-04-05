import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pogesund.de_w69', ['https://www.pogesund.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
