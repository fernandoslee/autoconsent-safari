import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_splice.com_yp0', ['https://splice.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
