import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wolleimhof.de_s98', ['https://wolleimhof.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
