import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_wien.gv.at_6jb', ['https://www.wien.gv.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
