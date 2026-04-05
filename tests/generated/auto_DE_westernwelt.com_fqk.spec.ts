import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_westernwelt.com_fqk', ['https://www.westernwelt.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
