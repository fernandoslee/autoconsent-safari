import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gymnasium.farama.org_zed', ['https://gymnasium.farama.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
