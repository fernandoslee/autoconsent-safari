import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_vardgivare.skane.se_mwj', ['https://vardgivare.skane.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
