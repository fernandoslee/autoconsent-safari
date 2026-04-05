import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_ionos.co.uk_f4f', ['https://www.ionos.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
