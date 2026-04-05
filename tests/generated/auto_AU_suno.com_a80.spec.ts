import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_suno.com_a80', ['https://suno.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
