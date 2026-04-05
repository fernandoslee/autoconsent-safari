import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_radscheune.de_88j', ['https://www.radscheune.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
