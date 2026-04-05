import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ford.co.nz_e43', ['https://www.ford.co.nz/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
