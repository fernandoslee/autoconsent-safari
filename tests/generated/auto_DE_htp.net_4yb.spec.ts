import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_htp.net_4yb', ['https://www.htp.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
