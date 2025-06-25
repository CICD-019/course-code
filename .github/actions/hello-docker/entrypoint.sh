#!/bin/sh

echo "::debug::Running entrypoint.sh"
echo "Hello $1"
echo "INPUT_WHO_TO_GREET: $INPUT_WHO_TO_GREET"
echo "HELLO: $HELLO"
TIME=$(date)
echo "time=$TIME" >> $GITHUB_OUTPUT 
echo "HELLO_TIME=$TIME" >> $GITHUB_ENV