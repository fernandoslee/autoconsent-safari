import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_trend-ferienwohnung.de_39m', ['https://trend-ferienwohnung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
