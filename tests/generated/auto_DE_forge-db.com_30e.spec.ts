import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forge-db.com_30e', ['https://www.forge-db.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
