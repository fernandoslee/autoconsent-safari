import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_aiper.store_wzs', ['https://aiper.store/au/store'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
