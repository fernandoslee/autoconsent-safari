import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_elastik.com_54v', ['https://elastik.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
