import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_redtube.net_yrh', ['https://www.redtube.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
