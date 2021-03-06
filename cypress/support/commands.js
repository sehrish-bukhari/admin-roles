// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import "cypress-localstorage-commands"
Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: `https://admin-test.seo.app/verify/code/?code=4ds34s-231sed2-123sde-32s2332`,
        failOnStatusCode: false,
        body1: {
            email: "edgytest01@gmail.com",
            name: "Edgy Test",
            picture: "https://lh3.googleusercontent.com/a/AATXAJyd08LdSXFvXPJZ4QXnQ6So1_rML7CrYnILy58T=s96-c",
            sub: "5cb169ab-db28-4e47-a61b-78cb2428971c",
            username: "Edgy Test"
        },
    }).its('body').then((body1) => {
        const vuexData = {

            email: "edgytest01@gmail.com",
            name: "Edgy Test",
            picture: "https://lh3.googleusercontent.com/a/AATXAJyd08LdSXFvXPJZ4QXnQ6So1_rML7CrYnILy58T=s96-c",
            sub: "5cb169ab-db28-4e47-a61b-78cb2428971c",
            username: "Edgy Test"

        }
        window.localStorage.setItem('user', JSON.stringify(vuexData))
    })
    //********************************************************************************************** */
    cy.request({
        method: 'POST',
        url: `https://admin-test.seo.app/verify/code/?code=4ds34s-231sed2-123sde-32s2332`,
        failOnStatusCode: false,
        body2: {
            accessToken: "eyJraWQiOiJ4SDJBejA5Q1hVSDYyQllsQkVncHNGOXBhYkxtVFNHZEFITnBFNVNMaTZ3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1Y2IxNjlhYi1kYjI4LTRlNDctYTYxYi03OGNiMjQyODk3MWMiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfQlBQMEFmOGxKX0dvb2dsZSJdLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjIzNTAwNjc4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9CUFAwQWY4bEoiLCJleHAiOjE2MjM1MDQyNzgsImlhdCI6MTYyMzUwMDY3OCwidmVyc2lvbiI6MiwianRpIjoiNjU5MjQ4NjgtNWMzNC00ODE5LTllNTAtYTE5NGYzZGYyNDc3IiwiY2xpZW50X2lkIjoiNm8wMzBhZWxmM2YwOWg0NG1vajA3NmZhZHYiLCJ1c2VybmFtZSI6Ikdvb2dsZV8xMDAyMjMxNjcwMzg2MTExMDUzNzIifQ.lI7wQ-_yQKMaAVm59AbS29HxWYPIKbryv0uNRvxCOrszdLRw_khFujRnkYeCNnpia0iiB_1N3hRWyNQZ5ys-P_W0M9KUFOKwOyRaoEgWHzH5MrXTloffUlw2_aVt9ikW6DzR59XS8QcU9ywMMz_9V14DXYpvTW5kdeLCY1H0DyP44gQ4QLldlttmGBMYw-_cd3-ilz2huZ6uZOXDy9otX41IW8QloeIsxHB4aAB-mm0i_scvlivLE75A3wYqNoF097v0x0jEDVIXT22tcXH7UTNrmuHXw8scRVxvSiIvDcyM5sVvArpOuT-aSavVKSt2fq4IO62E_a1_ZHW1UbmXtQ"

        },
    }).its('body').then((body2) => {
        const vuexData =

            "eyJraWQiOiJ4SDJBejA5Q1hVSDYyQllsQkVncHNGOXBhYkxtVFNHZEFITnBFNVNMaTZ3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1Y2IxNjlhYi1kYjI4LTRlNDctYTYxYi03OGNiMjQyODk3MWMiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfQlBQMEFmOGxKX0dvb2dsZSJdLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjIzNTAwNjc4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9CUFAwQWY4bEoiLCJleHAiOjE2MjM1MDQyNzgsImlhdCI6MTYyMzUwMDY3OCwidmVyc2lvbiI6MiwianRpIjoiNjU5MjQ4NjgtNWMzNC00ODE5LTllNTAtYTE5NGYzZGYyNDc3IiwiY2xpZW50X2lkIjoiNm8wMzBhZWxmM2YwOWg0NG1vajA3NmZhZHYiLCJ1c2VybmFtZSI6Ikdvb2dsZV8xMDAyMjMxNjcwMzg2MTExMDUzNzIifQ.lI7wQ-_yQKMaAVm59AbS29HxWYPIKbryv0uNRvxCOrszdLRw_khFujRnkYeCNnpia0iiB_1N3hRWyNQZ5ys-P_W0M9KUFOKwOyRaoEgWHzH5MrXTloffUlw2_aVt9ikW6DzR59XS8QcU9ywMMz_9V14DXYpvTW5kdeLCY1H0DyP44gQ4QLldlttmGBMYw-_cd3-ilz2huZ6uZOXDy9otX41IW8QloeIsxHB4aAB-mm0i_scvlivLE75A3wYqNoF097v0x0jEDVIXT22tcXH7UTNrmuHXw8scRVxvSiIvDcyM5sVvArpOuT-aSavVKSt2fq4IO62E_a1_ZHW1UbmXtQ"


        window.localStorage.setItem('accessToken', JSON.stringify(vuexData))
    })
    //************************************************************************************************* */
    cy.request({
        method: 'POST',
        url: `https://admin-test.seo.app/verify/code/?code=4ds34s-231sed2-123sde-32s2332`,
        failOnStatusCode: false,
        body3: {
            idToken: "eyJraWQiOiJaUGlxMitpZUtIZ01tT1pcL21Jak9FYmpCVFwvTEhRYnh6UWhzN1NTZit5bzg9IiwiYWxnIjoiUlMyNTYifQ.eyJjdXN0b206YWNjZXNzX3Rva2VuIjoieWEyOS5hMEFmSDZTTUQtOFcxQnR2REZsS1NvejBVTG94aURxZmtvckd1Q2E1WkRta21mRnFyZ2hZUENRNHh6VEcxdlRzRlRPWVljNVNYblJ6RkRDeFRkM1o2WEdMYnZRdEZiLWVUQ2hFWWRLS1kwbjZLVE9uYzJVeXh4MGRQMXBsN1M3eXI5NWVjdk80amhqRDI3WmxkWU9LaUtTX1dYM1NzbGs4MCIsImF0X2hhc2giOiI0YWRrSzBmcl82SThnVVE1Z3MzSDhnIiwic3ViIjoiNWNiMTY5YWItZGIyOC00ZTQ3LWE2MWItNzhjYjI0Mjg5NzFjIiwiY3VzdG9tOm1vbmdvSWQiOiI1ZTkwNDEwMWYwMDhkMTNkMWExMGUwZjgiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfQlBQMEFmOGxKX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0JQUDBBZjhsSiIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJHb29nbGVfMTAwMjIzMTY3MDM4NjExMTA1MzcyIiwiZ2l2ZW5fbmFtZSI6IkVkZ3kiLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FBVFhBSnlkMDhMZFNYRnZYUEpaNFFYblE2U28xX3JNTDdDclluSUx5NThUPXM5Ni1jIiwiYXVkIjoiNm8wMzBhZWxmM2YwOWg0NG1vajA3NmZhZHYiLCJjdXN0b206dG9rZW5fdHlwZSI6IkJlYXJlciIsImlkZW50aXRpZXMiOlt7InVzZXJJZCI6IjEwMDIyMzE2NzAzODYxMTEwNTM3MiIsInByb3ZpZGVyTmFtZSI6Ikdvb2dsZSIsInByb3ZpZGVyVHlwZSI6Ikdvb2dsZSIsImlzc3VlciI6bnVsbCwicHJpbWFyeSI6InRydWUiLCJkYXRlQ3JlYXRlZCI6IjE1ODY1MTIxMjc0MTUifV0sInRva2VuX3VzZSI6ImlkIiwiY3VzdG9tOm5ld1NpZ251cCI6IjAiLCJhdXRoX3RpbWUiOjE2MjM1MDA2NzgsIm5hbWUiOiJFZGd5IFRlc3QiLCJleHAiOjE2MjM3NDQwMTEsImlhdCI6MTYyMzc0MDQxMSwiZW1haWwiOiJlZGd5dGVzdDAxQGdtYWlsLmNvbSIsImN1c3RvbTppc0FkbWluIjoidHJ1ZSJ9.Oht2IkxrPNUYz-O5gBoRLJGe9iHFAm5CPFMNaw0GEFR3K4t4-wPgkAA-D-vDUAsMY8tqx2bsom0Aui-5tkRRtsliRZPBIvnPU5YvmwULNpmhtIoHsjDpup_z59Y5YzQnSIRnPOwepSu8CryK-fhuv64tvI8tm0QF9vq2Rf-qAsCwOParc2zH5AENP1VSLmzvrAlsSLauaxCP3BIDSsXu726z0pddc4PTVZ-cEfo1xSKTNj5pZRCkKdb6518MmMX8xEMEgGQFMRM717J30y97DxkwNVfA2_AyL3l7SsSZAshtJ8VHRKxusqrAlRjDQ51U4Hl5gmVwDsKrZO_qaIstYw",

        },
    }).its('body').then((body3) => {
        const vuexData =

            "eyJraWQiOiJaUGlxMitpZUtIZ01tT1pcL21Jak9FYmpCVFwvTEhRYnh6UWhzN1NTZit5bzg9IiwiYWxnIjoiUlMyNTYifQ.eyJjdXN0b206YWNjZXNzX3Rva2VuIjoieWEyOS5hMEFmSDZTTUQtOFcxQnR2REZsS1NvejBVTG94aURxZmtvckd1Q2E1WkRta21mRnFyZ2hZUENRNHh6VEcxdlRzRlRPWVljNVNYblJ6RkRDeFRkM1o2WEdMYnZRdEZiLWVUQ2hFWWRLS1kwbjZLVE9uYzJVeXh4MGRQMXBsN1M3eXI5NWVjdk80amhqRDI3WmxkWU9LaUtTX1dYM1NzbGs4MCIsImF0X2hhc2giOiI0YWRrSzBmcl82SThnVVE1Z3MzSDhnIiwic3ViIjoiNWNiMTY5YWItZGIyOC00ZTQ3LWE2MWItNzhjYjI0Mjg5NzFjIiwiY3VzdG9tOm1vbmdvSWQiOiI1ZTkwNDEwMWYwMDhkMTNkMWExMGUwZjgiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy1lYXN0LTFfQlBQMEFmOGxKX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0JQUDBBZjhsSiIsInBob25lX251bWJlcl92ZXJpZmllZCI6ZmFsc2UsImNvZ25pdG86dXNlcm5hbWUiOiJHb29nbGVfMTAwMjIzMTY3MDM4NjExMTA1MzcyIiwiZ2l2ZW5fbmFtZSI6IkVkZ3kiLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FBVFhBSnlkMDhMZFNYRnZYUEpaNFFYblE2U28xX3JNTDdDclluSUx5NThUPXM5Ni1jIiwiYXVkIjoiNm8wMzBhZWxmM2YwOWg0NG1vajA3NmZhZHYiLCJjdXN0b206dG9rZW5fdHlwZSI6IkJlYXJlciIsImlkZW50aXRpZXMiOlt7InVzZXJJZCI6IjEwMDIyMzE2NzAzODYxMTEwNTM3MiIsInByb3ZpZGVyTmFtZSI6Ikdvb2dsZSIsInByb3ZpZGVyVHlwZSI6Ikdvb2dsZSIsImlzc3VlciI6bnVsbCwicHJpbWFyeSI6InRydWUiLCJkYXRlQ3JlYXRlZCI6IjE1ODY1MTIxMjc0MTUifV0sInRva2VuX3VzZSI6ImlkIiwiY3VzdG9tOm5ld1NpZ251cCI6IjAiLCJhdXRoX3RpbWUiOjE2MjM1MDA2NzgsIm5hbWUiOiJFZGd5IFRlc3QiLCJleHAiOjE2MjM3NDQwMTEsImlhdCI6MTYyMzc0MDQxMSwiZW1haWwiOiJlZGd5dGVzdDAxQGdtYWlsLmNvbSIsImN1c3RvbTppc0FkbWluIjoidHJ1ZSJ9.Oht2IkxrPNUYz-O5gBoRLJGe9iHFAm5CPFMNaw0GEFR3K4t4-wPgkAA-D-vDUAsMY8tqx2bsom0Aui-5tkRRtsliRZPBIvnPU5YvmwULNpmhtIoHsjDpup_z59Y5YzQnSIRnPOwepSu8CryK-fhuv64tvI8tm0QF9vq2Rf-qAsCwOParc2zH5AENP1VSLmzvrAlsSLauaxCP3BIDSsXu726z0pddc4PTVZ-cEfo1xSKTNj5pZRCkKdb6518MmMX8xEMEgGQFMRM717J30y97DxkwNVfA2_AyL3l7SsSZAshtJ8VHRKxusqrAlRjDQ51U4Hl5gmVwDsKrZO_qaIstYw"

        window.localStorage.setItem('idToken', JSON.stringify(vuexData))
    })
    //************************************************************************************************* */
    cy.request({
        method: 'POST',
        url: `https://admin-test.seo.app/verify/code/?code=4ds34s-231sed2-123sde-32s2332`,
        failOnStatusCode: false,
        body4: {
            refreshToken: "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.CF7-7sMJg07dUJtdsa5NLTfyqvQmBKLGp-Jy04ZcikqyiQE6lHWkwpGUSlN6I8qipQalXXRVNqdTWZvKJb66NRoFj49fyUp8PqRqVOlTQdbuyjoQ_qEDKdd2aHNNi0_jtOHBsqfZSfm6FwBnjx7v0KcwO0q4ezkvsgFk-r0W1vWIAVD5lFgLthb196QwETLlFMbV0B-LcVq2pnllBZIFKeBwI8q5f_by1eXEkaQuydVDYvWUft6ic9FkNGKoDFqN3L5nc5jscLQjxykJl6l_To7ZtMQPTkbnTEE9XOIWIcC1ETioSAFm4Yj-fMU2mxWCGC82vH9PZznds6aov9JgCQ.G7Q489-hBsvzXEgy.baJDLfXVlaEjTW5s3MoROkHj-WWDulBpucGcb_hBGfCoMe_eQaxTvctkLC2Nm5lY2NceaBUvjcccUXa7sBbFPWizM9xr5nYYzLrIk_DQuWk4KkuXAgcFHEpBaNKbE0UdeNweTzGGD3kCrdX-3McqBbW419vM8osbtNMs5bduNs1j0xOf7JtH2D6W35UcxjmQswWXwz3xo9awHbP7EfI60f9lsLJbyYO4bYLe2P1L9ECGuYZm41P8bAHBHhVQe_fHKLWn5klDlOTq7M-ChqvLsWN6e5cZbrp4k6QaCN_kE8js5uzIo3RAXBkj2GCEx2BzHwReY-u6a8tQHIchxjdrMi_y2PQ40iq0xthc8yAmV-wje9H94kW9zN-QHqpZsYrO54DRuL5gqPKAyOD6bWOiHF5YWJCNHtzBSLbN1PkdCdoNFZd7R7tspdh4drVJ9e7SpTEt5_ZEtamO8ZoCU4-v40s5a8xqCN1dH_sUVUVvc9NNy2AYLslmJcY-cFu9t4U4KMHAPv6t443K9nnE2xu91u_tO9nmQWMWZmGbmrbl4g3ENsPx-uYgJMnBBH5Pe-_RwoYQ4mNedq2llbogaH2okHSdwhJEASMT2YbvMXnbfXMnL2S1w1PDgH9p1TUfUQ1z2N94yQ-19cBUOBoJrNhhuZctS6RPH8GqciXXFTX-fCda-8BFDhRp3vPmCGuGCx4lKTH5v1_CjtiRQhrc2DQAcHBz_RXEFDnN01boXInwiV5_dO81uS_0amHUJ0gZKyAEifd6fuh2w5lb5nAv0DpbSTHsxQ9W8NJZ8Cnb82oEMBsOHSsATo8CwKuOWjunZa_brtHK2MBTUNmAy5wjL4jyO36mWU3d9rqLkABMsaWp3NjDpMRD5R0CjUzr0VQodOgXsA4e3LuVqFJOMG0m1ZTAJFjPJtrOO8_3shVjyWKGDPXm50y-PztdN7o3mGkdwFp113vBW85wluFeksTEz_FLnHMJyFls7WYgUMo6XSV-7O92NAXvXEhg-HBov2BpO_aXGfpVFstVtzJtmpvt8ikH9aKufZZLBPolSEkor6RfSatb2SQlHgzd1S0Nwp3Q8-VXXhN8m3QNl6QgM1T3ttRWEjElrUYq4m1EYIvev5_ttlO1I4xR5ucfvprZQYArVhZxMXrH_Mu46pG7yB83cOQhF7vZy0v7g4hEO-roe-okVDYfOmgM2SwV0o1kV0yhhzk7BYP9D6Ool4OjvMabQSL-qHBMeBw6AjjDzHw_wic8jZjdFAoklyw0oBwvZFMPBxlIdJF37JRjS8PnXEcslntiq-VRlg4F.c9Mlmd9z6-Br89OolRLh4g"

        },
    }).its('body').then((body4) => {
        const vuexData =

            "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.CF7-7sMJg07dUJtdsa5NLTfyqvQmBKLGp-Jy04ZcikqyiQE6lHWkwpGUSlN6I8qipQalXXRVNqdTWZvKJb66NRoFj49fyUp8PqRqVOlTQdbuyjoQ_qEDKdd2aHNNi0_jtOHBsqfZSfm6FwBnjx7v0KcwO0q4ezkvsgFk-r0W1vWIAVD5lFgLthb196QwETLlFMbV0B-LcVq2pnllBZIFKeBwI8q5f_by1eXEkaQuydVDYvWUft6ic9FkNGKoDFqN3L5nc5jscLQjxykJl6l_To7ZtMQPTkbnTEE9XOIWIcC1ETioSAFm4Yj-fMU2mxWCGC82vH9PZznds6aov9JgCQ.G7Q489-hBsvzXEgy.baJDLfXVlaEjTW5s3MoROkHj-WWDulBpucGcb_hBGfCoMe_eQaxTvctkLC2Nm5lY2NceaBUvjcccUXa7sBbFPWizM9xr5nYYzLrIk_DQuWk4KkuXAgcFHEpBaNKbE0UdeNweTzGGD3kCrdX-3McqBbW419vM8osbtNMs5bduNs1j0xOf7JtH2D6W35UcxjmQswWXwz3xo9awHbP7EfI60f9lsLJbyYO4bYLe2P1L9ECGuYZm41P8bAHBHhVQe_fHKLWn5klDlOTq7M-ChqvLsWN6e5cZbrp4k6QaCN_kE8js5uzIo3RAXBkj2GCEx2BzHwReY-u6a8tQHIchxjdrMi_y2PQ40iq0xthc8yAmV-wje9H94kW9zN-QHqpZsYrO54DRuL5gqPKAyOD6bWOiHF5YWJCNHtzBSLbN1PkdCdoNFZd7R7tspdh4drVJ9e7SpTEt5_ZEtamO8ZoCU4-v40s5a8xqCN1dH_sUVUVvc9NNy2AYLslmJcY-cFu9t4U4KMHAPv6t443K9nnE2xu91u_tO9nmQWMWZmGbmrbl4g3ENsPx-uYgJMnBBH5Pe-_RwoYQ4mNedq2llbogaH2okHSdwhJEASMT2YbvMXnbfXMnL2S1w1PDgH9p1TUfUQ1z2N94yQ-19cBUOBoJrNhhuZctS6RPH8GqciXXFTX-fCda-8BFDhRp3vPmCGuGCx4lKTH5v1_CjtiRQhrc2DQAcHBz_RXEFDnN01boXInwiV5_dO81uS_0amHUJ0gZKyAEifd6fuh2w5lb5nAv0DpbSTHsxQ9W8NJZ8Cnb82oEMBsOHSsATo8CwKuOWjunZa_brtHK2MBTUNmAy5wjL4jyO36mWU3d9rqLkABMsaWp3NjDpMRD5R0CjUzr0VQodOgXsA4e3LuVqFJOMG0m1ZTAJFjPJtrOO8_3shVjyWKGDPXm50y-PztdN7o3mGkdwFp113vBW85wluFeksTEz_FLnHMJyFls7WYgUMo6XSV-7O92NAXvXEhg-HBov2BpO_aXGfpVFstVtzJtmpvt8ikH9aKufZZLBPolSEkor6RfSatb2SQlHgzd1S0Nwp3Q8-VXXhN8m3QNl6QgM1T3ttRWEjElrUYq4m1EYIvev5_ttlO1I4xR5ucfvprZQYArVhZxMXrH_Mu46pG7yB83cOQhF7vZy0v7g4hEO-roe-okVDYfOmgM2SwV0o1kV0yhhzk7BYP9D6Ool4OjvMabQSL-qHBMeBw6AjjDzHw_wic8jZjdFAoklyw0oBwvZFMPBxlIdJF37JRjS8PnXEcslntiq-VRlg4F.c9Mlmd9z6-Br89OolRLh4g"
        window.localStorage.setItem('refreshToken', JSON.stringify(vuexData))
    })
})
