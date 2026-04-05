import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stiegeler.com_zl7', ['https://stiegeler.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
