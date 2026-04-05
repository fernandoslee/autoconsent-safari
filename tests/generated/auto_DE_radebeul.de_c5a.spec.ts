import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_radebeul.de_c5a', ['https://www.radebeul.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
