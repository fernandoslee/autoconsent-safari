import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bes.co.uk_e00', ['https://www.bes.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
