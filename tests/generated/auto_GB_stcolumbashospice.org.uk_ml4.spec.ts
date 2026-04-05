import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_stcolumbashospice.org.uk_ml4', ['https://stcolumbashospice.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
