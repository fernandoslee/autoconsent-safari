import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berlin-audi.de_bsp', ['https://www.berlin-audi.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
