import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_recetas.com_osa', ['https://www.recetas.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
