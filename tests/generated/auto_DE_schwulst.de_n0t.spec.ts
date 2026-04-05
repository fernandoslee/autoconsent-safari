import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schwulst.de_n0t', ['https://www.schwulst.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
