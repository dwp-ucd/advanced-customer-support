//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/acs/in_person_adjustments/v1/forms/01does-the-customer-know', function(request, response) {
    var customerConsent = request.session.data['customer-consent']
    console.log(customerConsent)
    if (customerConsent == "Yes"){
        response.redirect("/acs/in_person_adjustments/v1/forms/02what-kind-of-adjustment")
    } else {
        response.redirect("/acs/in_person_adjustments/v1/forms/03customer-does-not-know")
    }
})