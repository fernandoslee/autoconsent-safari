import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_osbinzicht.nl_grq', ['https://osbinzicht.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
