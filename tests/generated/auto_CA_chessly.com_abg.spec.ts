import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_chessly.com_abg', ['https://chessly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
