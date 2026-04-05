import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_solarv.de_ppx', ['https://solarv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
