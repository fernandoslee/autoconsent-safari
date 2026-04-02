import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_suno.com_tzi', ['https://suno.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
