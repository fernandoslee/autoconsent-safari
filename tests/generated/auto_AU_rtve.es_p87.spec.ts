import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_rtve.es_p87', ['https://www.rtve.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
