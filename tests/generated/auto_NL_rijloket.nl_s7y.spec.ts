import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rijloket.nl_s7y', ['https://rijloket.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
