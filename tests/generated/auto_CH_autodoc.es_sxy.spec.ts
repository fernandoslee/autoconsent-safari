import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_autodoc.es_sxy', ['https://www.autodoc.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
