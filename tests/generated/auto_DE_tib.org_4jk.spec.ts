import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tib.org_4jk', ['https://www.tib.org/en/inici'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
