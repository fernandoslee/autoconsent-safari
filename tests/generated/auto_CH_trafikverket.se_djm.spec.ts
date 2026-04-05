import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_trafikverket.se_djm', ['https://www.trafikverket.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
