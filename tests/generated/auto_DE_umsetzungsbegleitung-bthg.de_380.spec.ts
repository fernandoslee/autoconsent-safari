import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_umsetzungsbegleitung-bthg.de_380', ['https://umsetzungsbegleitung-bthg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
