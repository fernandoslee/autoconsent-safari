import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_todofp.es_3u1', ['https://todofp.es/inicio.html'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
