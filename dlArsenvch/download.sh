#/bin/bash

locations=$(lynx --dump $1 | grep zippy)

echo "resolving file locations"
 
while IFS= read -r line; do
  file=$(phantomjs grepZippy.js $line)
  echo "curling $file"
  curl -O $file
done <<< "$locations"

