import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_privacyportal.co.uk_c9z', ['https://www.privacyportal.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
