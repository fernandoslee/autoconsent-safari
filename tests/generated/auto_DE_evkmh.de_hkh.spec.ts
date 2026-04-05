import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_evkmh.de_hkh', ['https://evkmh.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
