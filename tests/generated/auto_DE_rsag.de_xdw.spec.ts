import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rsag.de_xdw', ['https://www.rsag.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
