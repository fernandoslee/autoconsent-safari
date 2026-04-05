import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_purple.com_fd5', ['https://purple.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
