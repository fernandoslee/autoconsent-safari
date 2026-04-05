import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_radschlag.com_euo', ['https://www.radschlag.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
