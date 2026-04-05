import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_nba.com_xkl', ['https://www.nba.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
