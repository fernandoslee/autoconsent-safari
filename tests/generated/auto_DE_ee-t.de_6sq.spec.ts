import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ee-t.de_6sq', ['https://www.ee-t.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
