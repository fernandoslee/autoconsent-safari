import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_moebel24.at_rov', ['https://www.moebel24.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
