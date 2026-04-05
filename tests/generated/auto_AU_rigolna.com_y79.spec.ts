import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_rigolna.com_y79', ['https://www.rigolna.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
