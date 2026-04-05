import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lilly.com_jwz', ['https://www.lilly.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
