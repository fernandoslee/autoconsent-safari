import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_stateofsurveillance.org_8jk', ['https://stateofsurveillance.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
