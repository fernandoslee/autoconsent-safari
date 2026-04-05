import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_adventurebikerider.com_g7a', ['https://www.adventurebikerider.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
