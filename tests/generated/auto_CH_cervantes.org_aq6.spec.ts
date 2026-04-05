import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cervantes.org_aq6', ['https://cervantes.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
