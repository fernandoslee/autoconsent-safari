import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_onzestroom.nl_yaw', ['https://onzestroom.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
