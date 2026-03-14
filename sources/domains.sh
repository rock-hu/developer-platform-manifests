#! /bin/bash
while IFS="," read -r category domain
do
    echo plop backstage-domain  -- --category $category --domain $domain
done <  domains.csv
