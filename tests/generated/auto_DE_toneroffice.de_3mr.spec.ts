import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_toneroffice.de_3mr', ['https://toneroffice.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
