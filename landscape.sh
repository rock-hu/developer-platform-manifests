#! /bin/bash
while IFS="," read -r domain service
do
    # nohup plop domain -- --category BIAN --domain $domain > /dev/null &
    # echo plop component -- --name $service --type service --lifecycle production --system $domain --owner $domain 
    echo plop group -- --parent BIAN --team $domain
done <  landscape.csv
