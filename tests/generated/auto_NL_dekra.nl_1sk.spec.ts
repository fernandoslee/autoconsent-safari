import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dekra.nl_1sk', ['https://www.dekra.nl/nl/home/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
