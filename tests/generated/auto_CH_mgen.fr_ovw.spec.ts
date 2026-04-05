import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mgen.fr_ovw', ['https://www.mgen.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
