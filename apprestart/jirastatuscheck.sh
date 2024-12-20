#!/bin/bash

# Function to call the jira status command and return the status
get_jira_status() {
    jira status
}

# Function to wait for a given time (default 5 seconds)
wait_for() {
    local wait_time=${1:-5}
    echo "Waiting for $wait_time seconds..."
    sleep "$wait_time"
}

# Main logic
while true; do
    status=$(get_jira_status)

    if [[ "$status" != *"active"* ]]; then
        echo "Jira is not active. Proceeding with restart sequence."

        # Call jira stop
        echo "Stopping Jira..."
        jira stop
        wait_for

        # Check status after stop
        echo "Checking status after stop..."
        status=$(get_jira_status)
        echo "Current status: $status"
        wait_for

        # Call jira start
        echo "Starting Jira..."
        jira start
        wait_for

        # Check status after start
        echo "Checking status after start..."
        status=$(get_jira_status)
        echo "Final status: $status"
    else
        echo "Jira is active. No action needed."
    fi

    # Wait before checking again (or break the loop as needed)
    echo "Sleeping before next check..."
    wait_for 10

done
