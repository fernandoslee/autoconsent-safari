import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tib.org_qma', ['https://www.tib.org/en/inici'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
