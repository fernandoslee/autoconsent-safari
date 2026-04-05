import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_interismo.ch_pok', ['https://www.interismo.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
