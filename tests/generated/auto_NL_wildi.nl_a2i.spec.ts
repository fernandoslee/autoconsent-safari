import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wildi.nl_a2i', ['https://wildi.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
