import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_barenreiter.co.uk_903', ['https://www.barenreiter.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
