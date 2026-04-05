import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_musiciansfriend.com_ezr', ['https://www.musiciansfriend.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
