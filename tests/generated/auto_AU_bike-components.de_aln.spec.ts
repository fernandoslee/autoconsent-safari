import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_bike-components.de_aln', ['https://www.bike-components.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
