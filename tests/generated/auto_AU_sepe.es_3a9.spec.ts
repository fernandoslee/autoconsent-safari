import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sepe.es_3a9', ['https://www.sepe.es/HomeSepe'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
