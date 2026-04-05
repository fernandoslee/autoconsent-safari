import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.tineco.com_ii9', ['https://de.tineco.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
