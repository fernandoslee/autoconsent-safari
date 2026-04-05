import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_letsdanceshop.de_jg9', ['https://www.letsdanceshop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
