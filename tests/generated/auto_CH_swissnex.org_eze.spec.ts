import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissnex.org_eze', ['https://swissnex.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
