import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eago.de_a0i', ['https://www.eago.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
