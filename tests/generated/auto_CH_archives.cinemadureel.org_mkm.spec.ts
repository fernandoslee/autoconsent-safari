import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_archives.cinemadureel.org_mkm', ['https://archives.cinemadureel.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
