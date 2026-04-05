import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_veiligwerk.net_1lh', ['https://veiligwerk.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
