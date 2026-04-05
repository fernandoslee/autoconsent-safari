import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_repscan.com_llw', ['https://www.repscan.com/es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
