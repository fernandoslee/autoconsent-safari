import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_services.ihk.digital_gar', ['https://services.ihk.digital/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
