import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_es.redtube.com_bsk', ['https://es.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
