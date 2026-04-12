# redocly

```bash
npm i @redocly/cli@latest
```

```bash
redocly split --version
redocly split <api> --outDir=<path>
redocly split [--help] [--version]

```


```bash
npx @redocly/cli@latest
```

```bash
redocly split vrp-openapi.yaml --outDir=variable-recurring-payments
redocly split payment-initiation-openapi.yaml --outDir=payment-initiation
redocly split events-openapi.yaml --outDir=events
redocly split event-notifications-openapi.yaml --outDir=event-notifications
redocly split confirmation-funds-openapi.yaml --outDir=confirmation-funds
redocly split account-info-openapi.yaml --outDir=account-transaction
```

## account-transaction

| Resource                | Endpoints                                                       | Mandatory?  |
| ----------------------- | --------------------------------------------------------------- | ----------- |
| account-access-consents | POST /account-access-consents                                   | Mandatory   |
| account-access-consents | GET /account-access-consents/{ConsentId}                        | Mandatory   |
| account-access-consents | DELETE /account-access-consents/{ConsentId}                     | Mandatory   |
| accounts                | GET /accounts                                                   | Mandatory   |
| accounts                | GET /accounts/{AccountId}                                       | Mandatory   |
| balances                | GET /accounts/{AccountId}/balances                              | Mandatory   |
| balances                | GET /balances                                                   | Optional    |
| transactions            | GET /accounts/{AccountId}/transactions                          | Mandatory   |
| transactions            | GET /transactions                                               | Optional    |
| beneficiaries           | GET /accounts/{AccountId}/beneficiaries                         | Conditional |
| beneficiaries           | GET /beneficiaries                                              | Optional    |
| direct-debits           | GET /accounts/{AccountId}/direct-debits                         | Conditional |
| direct-debits           | GET /direct-debits                                              | Optional    |
| standing-orders         | GET /accounts/{AccountId}/standing-orders                       | Conditional |
| standing-orders         | GET /standing-orders                                            | Optional    |
| products                | GET /accounts/{AccountId}/product                               | Conditional |
| products                | GET /products                                                   | Optional    |
| offers                  | GET /accounts/{AccountId}/offers                                | Conditional |
| offers                  | GET /offers                                                     | Optional    |
| parties                 | GET /accounts/{AccountId}/parties                               | Conditional |
| parties                 | GET /accounts/{AccountId}/party                                 | Conditional |
| parties                 | GET /party                                                      | Conditional |
| scheduled-payments      | GET /accounts/{AccountId}/scheduled-payments                    | Conditional |
| scheduled-payments      | GET /scheduled-payments                                         | Optional    |
| statements              | GET /accounts/{AccountId}/statements                            | Conditional |
| statements              | GET /accounts/{AccountId}/statements/{StatementId}              | Conditional |
| statements              | GET /accounts/{AccountId}/statements/{StatementId}/file         | Optional    |
| statements              | GET /accounts/{AccountId}/statements/{StatementId}/transactions | Conditional |
| statements              | GET /statements                                                 | Optional    |

## payment-initiation

| Resource                                 | Endpoints                                                                                | Mandatory?                               |
| ---------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------- |
| domestic-payment-consents                | POST /domestic-payment-consents                                                          | Mandatory                                |
| domestic-payment-consents                | GET /domestic-payment-consents/{ConsentId}                                               | Mandatory                                |
| domestic-payment-consents                | GET /domestic-payment-consents/{ConsentId}/funds-confirmation                            | Mandatory                                |
| domestic-payments                        | POST /domestic-payments                                                                  | Mandatory                                |
| domestic-payments                        | GET /domestic-payments/{DomesticPaymentId}                                               | Mandatory                                |
| payment-details                          | GET /domestic-payments/{DomesticPaymentId}/payment-details                               | Optional                                 |
| domestic-scheduled-payment-consents      | POST /domestic-scheduled-payment-consents                                                | Conditional                              |
| domestic-scheduled-payment-consents      | GET /domestic-scheduled-payment-consents/{ConsentId}                                     | Mandatory (if resource POST implemented) |
| domestic-scheduled-payments              | POST /domestic-scheduled-payments                                                        | Conditional                              |
| domestic-scheduled-payments              | GET /domestic-scheduled-payments/{DomesticScheduledPaymentId}                            | Mandatory (if resource POST implemented) |
| payment-details                          | GET /domestic-scheduled-payments/{DomesticScheduledPaymentId}/payment-details            | Optional                                 |
| domestic-standing-order-consents         | POST /domestic-standing-order-consents                                                   | Conditional                              |
| domestic-standing-order-consents         | GET /domestic-standing-order-consents/{ConsentId}                                        | Mandatory (if resource POST implemented) |
| domestic-standing-orders                 | POST /domestic-standing-orders                                                           | Conditional                              |
| domestic-standing-orders                 | GET /domestic-standing-orders/{DomesticStandingOrderId}                                  | Mandatory (if resource POST implemented) |
| payment-details                          | GET /domestic-standing-orders/{DomesticStandingOrderId}/payment-details                  | Optional                                 |
| international-payment-consents           | POST /international-payment-consents                                                     | Conditional                              |
| international-payment-consents           | GET /international-payment-consents/{ConsentId}                                          | Mandatory (if resource POST implemented) |
| international-payment-consents           | GET /international-payment-consents/{ConsentId}/funds-confirmation                       | Mandatory (if resource POST implemented) |
| international-payments                   | POST /international-payments                                                             | Conditional                              |
| international-payments                   | GET /international-payments/{InternationalPaymentId}                                     | Mandatory (if resource POST implemented) |
| payment-details                          | GET /international-payments/{InternationalPaymentId}/payment-details                     | Optional                                 |
| international-scheduled-payment-consents | POST /international-scheduled-payment-consents                                           | Conditional                              |
| international-scheduled-payment-consents | GET /international-scheduled-payment-consents/{ConsentId}                                | Mandatory (if resource POST implemented) |
| international-scheduled-payment-consents | GET /international-scheduled-payment-consents/{ConsentId}/funds-confirmation             | Mandatory (if resource POST implemented) |
| international-scheduled-payments         | POST /international-scheduled-payments                                                   | Conditional                              |
| international-scheduled-payments         | GET /international-scheduled-payments/{InternationalScheduledPaymentId}                  | Mandatory (if resource POST implemented) |
| payment-details                          | GET /international-scheduled-payments/{InternationalScheduledPaymentId}/payment-details  | Optional                                 |
| international-standing-order-consents    | POST /international-standing-order-consents                                              | Conditional                              |
| international-standing-order-consents    | GET /international-standing-order-consents/{ConsentId}                                   | Mandatory (if resource POST implemented) |
| international-standing-orders            | POST /international-standing-orders                                                      | Conditional                              |
| international-standing-orders            | GET /international-standing-orders/{InternationalStandingOrderPaymentId}                 | Mandatory (if resource POST implemented) |
| payment-details                          | GET /international-standing-orders/{InternationalStandingOrderPaymentId}/payment-details | Optional                                 |
| file-payment-consents                    | POST /file-payment-consents                                                              | Conditional                              |
| file-payment-consents                    | GET /file-payment-consents/{ConsentId}                                                   | Conditional                              |
| file-payment-consents                    | POST /file-payment-consents/{ConsentId}/file                                             | Mandatory (if resource POST implemented) |
| file-payment-consents                    | GET /file-payment-consents/{ConsentId}/file                                              | Conditional                              |
| file-payments                            | POST /file-payments                                                                      | Conditional                              |
| file-payments                            | GET /file-payments/{FilePaymentId}                                                       | Mandatory (if resource POST implemented) |
| file-payments                            | GET /file-payments/{FilePaymentId}/report-file                                           | Conditional                              |
| payment-details                          | GET /file-payments/{FilePaymentId}/payment-details                                       | Optional                                 |

## confirmation-funds

| Resource                    | Endpoints                                       | Mandatory? |
| --------------------------- | ----------------------------------------------- | ---------- |
| funds-confirmation-consents | POST /funds-confirmation-consents               | Mandatory  |
| funds-confirmation-consents | GET /funds-confirmation-consents/{ConsentId}    | Mandatory  |
| funds-confirmation-consents | DELETE /funds-confirmation-consents/{ConsentId} | Mandatory  |
| funds-confirmations         | POST /funds-confirmations                       | Mandatory  |

## variable-recurring-payments

| Resource                 | Endpoints                                                  | Mandatory?  |
| ------------------------ | ---------------------------------------------------------- | ----------- |
| domestic-vrp-consents.md | POST /domestic-vrp-consents                                | Mandatory   |
| domestic-vrp-consents.md | GET /domestic-vrp-consents/{ConsentId}                     | Mandatory   |
| domestic-vrp-consents.md | DELETE /domestic-vrp-consents/{ConsentId}                  | Mandatory   |
| domestic-vrp-consents.md | PUT /domestic-vrp-consents/{ConsentId}                     | Optional    |
| domestic-vrp-consents.md | PATCH /domestic-vrp-consents/{ConsentId}                   | Optional    |
| domestic-vrp-consents.md | POST /domestic-vrp-consents/{ConsentId}/funds-confirmation | Mandatory   |
| domestic-vrps.md         | POST /domestic-vrps                                        | Conditional |
| domestic-vrps.md         | GET /domestic-vrps/{DomesticVRPId}                         | Conditional |
| domestic-vrps.md         | GET /domestic-vrps/{DomesticVRPId}/payment-details         | Optional    |

## event notifications

| Resource           | Endpoints                                         | Mandatory?                               |
| ------------------ | ------------------------------------------------- | ---------------------------------------- |
| event-subscription | POST /event-subscriptions                         | Optional                                 |
| event-subscription | GET /event-subscriptions                          | Mandatory (if resource POST implemented) |
| event-subscription | PUT /event-subscriptions/{EventSubscriptionId}    | Mandatory (if resource POST implemented) |
| event-subscription | DELETE /event-subscriptions/{EventSubscriptionId} | Mandatory (if resource POST implemented) |
| callback-url       | POST /callback-urls                               | Optional                                 |
| callback-url       | GET /callback-urls                                | Mandatory (if resource POST implemented) |
| callback-url       | PUT /callback-urls/{CallbackUrlId}                | Mandatory (if resource POST implemented) |
| callback-url       | DELETE /callback-urls/{CallbackUrlId}             | Mandatory (if resource POST implemented) |
| event-notification | POST /event-notifications                         | Optional                                 |
| events             | POST /events                                      | Optional                                 |
