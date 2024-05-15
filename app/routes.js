//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// VERSION 1
router.post('/acs/in_person_adjustments/v1/forms/02what-kind-of-adjustment', function(request, response) {
    var adjustmetnsSelected = request.session.data['adjustments']
    if (adjustmetnsSelected && adjustmetnsSelected.includes('Sign language')){
        response.redirect("/acs/in_person_adjustments/v1/forms/04sign-language-type")
    } else {
        response.redirect("/acs/in_person_adjustments/v1/forms/check-answers")
    }
})

router.post('/acs/in_person_adjustments/v1/forms/01does-the-customer-know', function(request, response) {
    var customerConsent = request.session.data['customer-consent']
    if (customerConsent == "Yes"){
        response.redirect("/acs/in_person_adjustments/v1/forms/02what-kind-of-adjustment")
    } else {
        response.redirect("/acs/in_person_adjustments/v1/forms/03customer-does-not-know")
    }
})

// VERSION 2
router.post('/acs/in_person_adjustments/v2/forms/01does-the-customer-know', function(request, response) {
    var customerConsent = request.session.data['customer-consent']
    if (customerConsent == "Yes"){
        response.redirect("/acs/in_person_adjustments/v2/forms/02what-kind-of-adjustment")
    } else {
        response.redirect("/acs/in_person_adjustments/v2/forms/03customer-does-not-know")
    }
})

// VERSION 3
router.post('/acs/in_person_adjustments/v3/forms/01does-the-customer-know', function(request, response) {
    var customerConsent = request.session.data['customer-consent']
    if (customerConsent == "Yes"){
        response.redirect("/acs/in_person_adjustments/v3/forms/02what-kind-of-adjustment")
    } else {
        response.redirect("/acs/in_person_adjustments/v3/forms/03customer-does-not-know")
    }
})