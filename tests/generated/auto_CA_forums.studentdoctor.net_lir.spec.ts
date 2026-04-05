import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_forums.studentdoctor.net_lir', ['https://forums.studentdoctor.net/forums/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
