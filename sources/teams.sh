#! /bin/bash
while IFS="," read -r organization team
do
    echo plop backstage-group  -- --organization $organization --team $team
done <  teams.csv
