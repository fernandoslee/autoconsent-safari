import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_manage.autodesk.com_ze3', ['https://manage.autodesk.com/login?t=/home'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
