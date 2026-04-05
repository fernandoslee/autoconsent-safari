import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_musiciansfriend.com_cmg', ['https://www.musiciansfriend.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
