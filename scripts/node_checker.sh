#!/bin/bash

printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
printf "NODE VERSION:  "
node -v
printf "NPM VERSION:  "
npm -v
printf '"''package.json''"'' exist?:  '
[ -f "package.json" ] && echo "✓"
[ ! -f "package.json" ] && echo "✘"
printf '"''node_modules/''"'' exist?:  '
[ -d node_modules/ ] && echo "✓"
[ ! -d node_modules/ ] && echo "✘"
[ -x "$(command -v check-engine)" ] && check-engine
if [ ! -x "$(command -v check-engine)" ]
then
  read -p "You do not have check-engine npm package globally installed which lets you check your current node/npm version against the current directory package.json, install now? (y/n)" -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]
  then
      npm i -g check-engine && echo "\n global dep installed, running it now... \n" && check-engine
  fi
fi
printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -