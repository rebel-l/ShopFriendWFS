#!/usr/bin/env bash

showHelp(){
    echo
    echo "Script executes linters and tests."
    echo "usage: ./scripts/tools/runChecks.sh [options]"
    echo
    echo "Options:"
    echo "-h, -?    shows this help"
    echo
}

while getopts "h?" opt; do
    case "$opt" in
        h|\?)
            showHelp
            exit 0
            ;;
    esac
done

# Execute linter
echo
echo -en "\E[40;35m\033[1mExecute linters\033[0m"
echo
npm run lint
EXIT_CODE=$?
if [[ ${EXIT_CODE} != 0 ]]
then
    echo
    echo -en "\E[40;31m\033[1mLinting failed with exit code: \033[0m" ${EXIT_CODE}
    echo
    echo
    exit ${EXIT_CODE}
fi

# Execute tests
echo -en "\E[40;35m\033[1mExecute tests\033[0m"
echo
# TODO: execute unit tests here
# go test -v ${SHORT} ${RACE} ${COVER} ./...
EXIT_CODE=$?
if [[ ${EXIT_CODE} != 0 ]]
then
    echo
    echo -en "\E[40;31m\033[1mTests failed with exit code: \033[0m" ${EXIT_CODE}
    echo
    echo
    exit ${EXIT_CODE}
fi

# Success
echo
echo -en "\E[40;32m\033[1mChecks run successful :-)\033[0m"
echo
echo
