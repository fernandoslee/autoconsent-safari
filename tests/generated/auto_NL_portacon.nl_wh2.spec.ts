import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_portacon.nl_wh2', ['https://www.portacon.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
