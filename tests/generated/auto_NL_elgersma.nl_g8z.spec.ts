import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_elgersma.nl_g8z', ['https://www.elgersma.nl/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
