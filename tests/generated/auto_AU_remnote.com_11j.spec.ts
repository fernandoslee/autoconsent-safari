import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_remnote.com_11j', ['https://www.remnote.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
