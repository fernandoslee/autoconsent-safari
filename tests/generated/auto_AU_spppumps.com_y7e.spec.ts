import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_spppumps.com_y7e', ['https://www.spppumps.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
