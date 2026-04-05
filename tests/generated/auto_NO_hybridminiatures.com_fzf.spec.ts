import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hybridminiatures.com_fzf', ['https://www.hybridminiatures.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
