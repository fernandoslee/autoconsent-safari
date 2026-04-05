import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pff.de_o1w', ['https://www.pff.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
