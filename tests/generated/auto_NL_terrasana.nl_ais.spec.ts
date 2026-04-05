import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_terrasana.nl_ais', ['https://www.terrasana.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
