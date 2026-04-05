import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dj-verkoop.nl_qvv', ['https://dj-verkoop.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
