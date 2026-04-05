import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_7mmscalesociety.uk_200', ['https://www.7mmscalesociety.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
