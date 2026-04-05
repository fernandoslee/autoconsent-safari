import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_acrylicosvallejo.com_s9w', ['https://acrylicosvallejo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
