import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_slottracker.com_2ui', ['https://slottracker.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
