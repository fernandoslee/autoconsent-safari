import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bikeriet.no_yac', ['https://www.bikeriet.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
