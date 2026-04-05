import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_redtube.net_4vf', ['https://www.redtube.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
