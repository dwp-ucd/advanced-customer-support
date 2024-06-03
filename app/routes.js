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
        response.redirect("/acs/in_person_adjustments/v3/forms/03what-kind-of-adjustment")
    } else {
        response.redirect("/acs/in_person_adjustments/v3/forms/05customer-does-not-know")
    }
})

router.post('/acs/in_person_adjustments/v3/forms/02does-the-customer-know-spoken', function(request, response) {
    var customerConsent = request.session.data['customer-consent']
    if (customerConsent == "Yes"){
        response.redirect("/acs/in_person_adjustments/v3/forms/04what-kind-of-spoken-adjustment")
    } else {
        response.redirect("/acs/in_person_adjustments/v3/forms/05customer-does-not-know")
    }
})































router.use((req, res, next) => {
    const log = {
      method: req.method,
      url: req.originalUrl, //URL of page
      data: req.session.data //all data held
    }
    console.log(JSON.stringify(log, null, 2)) // show all data as a dump in terminal
    next() // continue to next action
  
  })