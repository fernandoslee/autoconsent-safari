import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hetonvve.nl_nk2', ['https://www.hetonvve.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
