import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ru.redtube.com_e5x', ['https://ru.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
