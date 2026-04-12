#! /bin/bash

export domain=$1

# ./paths.sh account-transaction
# ./paths.sh confirmation-funds
# ./paths.sh event-notifications
# ./paths.sh events
# ./paths.sh payment-initiation
# ./paths.sh variable-recurring-payments



rm -rf ${domain}/*-openapi.yaml

while IFS="," read -r service path
do
    echo "${service} ${path}"
    touch ${domain}/${service}-openapi.yaml
    echo "  /${path}:" >> ${domain}/${service}-openapi.yaml
    echo "    \$ref: paths/${path}.yaml" >> ${domain}/${service}-openapi.yaml
done <  ${domain}-paths.csv
