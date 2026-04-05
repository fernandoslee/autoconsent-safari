import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dokument.club_1rz', ['https://dokument.club/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
