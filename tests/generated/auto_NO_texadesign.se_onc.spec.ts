import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_texadesign.se_onc', ['https://texadesign.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
