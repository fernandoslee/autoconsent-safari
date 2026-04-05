import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kleppesto-senter.no_pxt', ['https://kleppesto-senter.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
