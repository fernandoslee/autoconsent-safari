import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_beersofeurope.co.uk_2a8', ['https://www.beersofeurope.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
