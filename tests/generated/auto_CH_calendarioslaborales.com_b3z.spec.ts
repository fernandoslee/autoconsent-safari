import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_calendarioslaborales.com_b3z', ['https://calendarioslaborales.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
