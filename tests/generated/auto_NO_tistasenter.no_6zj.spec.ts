import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tistasenter.no_6zj', ['https://www.tistasenter.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
