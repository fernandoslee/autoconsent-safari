import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_spectrumoutfitters.co.uk_g4b', ['https://spectrumoutfitters.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
