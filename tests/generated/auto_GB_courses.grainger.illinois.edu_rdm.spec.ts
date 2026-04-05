import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_courses.grainger.illinois.edu_rdm', ['https://courses.grainger.illinois.edu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
