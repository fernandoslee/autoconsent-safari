import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_classic.e-chords.com_798', ['https://classic.e-chords.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
