import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_eurostarshotels.co.uk_593', ['https://www.eurostarshotels.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
