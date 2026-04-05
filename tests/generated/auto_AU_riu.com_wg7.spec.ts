import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_riu.com_wg7', ['https://www.riu.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
