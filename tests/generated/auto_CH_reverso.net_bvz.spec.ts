import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_reverso.net_bvz', ['https://www.reverso.net/text-translation'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
