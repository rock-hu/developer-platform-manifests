#! /bin/bash
while IFS="," read -r service path
do
    echo "${service}"
done <  payment-initiation-paths.csv
