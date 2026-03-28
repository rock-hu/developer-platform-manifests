#! /bin/bash
while IFS="," read -r system owner domain type
do
    echo plop backstage-system  -- --name $system --owner $owner --domain $domain --type $type
done <  systems.csv
