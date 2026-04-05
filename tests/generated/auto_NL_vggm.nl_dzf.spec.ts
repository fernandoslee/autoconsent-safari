import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vggm.nl_dzf', ['https://vggm.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
