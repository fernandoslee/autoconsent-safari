import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_brooksengland.com_ni9', ['https://www.brooksengland.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
