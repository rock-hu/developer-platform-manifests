#! /bin/bash
while IFS="," read -r version artifact
do
    # nohup plop domain -- --category BIAN --domain $domain > /dev/null &
    # echo plop component -- --name $service --type service --lifecycle production --system $domain --owner $domain 
    echo plop bian-semantic -- --version $version --artifact $artifact
done <  bian-semantic.csv
