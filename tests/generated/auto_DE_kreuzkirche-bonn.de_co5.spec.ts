import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kreuzkirche-bonn.de_co5', ['https://www.kreuzkirche-bonn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
