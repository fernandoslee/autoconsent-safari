import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dp6.nl_9ya', ['https://www.dp6.nl/nl'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
