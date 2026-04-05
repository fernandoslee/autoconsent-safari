import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_pixartprinting.co.uk_qfi', ['https://www.pixartprinting.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
