import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_store-locator.ernstings-family.de_7wi', ['https://store-locator.ernstings-family.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
