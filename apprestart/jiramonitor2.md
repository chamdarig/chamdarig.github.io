To enhance the script with the two checks you described:

1. **First Check**: Use the `jira status` command (or equivalent) to determine the service's state on Linux.
2. **Second Check**: Verify the application is reachable in a browser using `curl`.
3. **Restart Logic**: Restart the Jira application if either check fails, then recheck after a restart.
4. **Continuous Monitoring**: Repeat the process every 30 minutes.

Here’s an improved version of the script:

### Enhanced Script

```bash
#!/bin/bash

# Variables
JIRA_STATUS_CMD="jira status"     # Command to check Jira service status
JIRA_URL="http://localhost:8080"  # Replace with your Jira URL
SERVICE_NAME="jira"               # Replace with the Jira service name
CHECK_TIMEOUT=5                   # Timeout in seconds for the curl command
RECHECK_INTERVAL=30               # Time in minutes between checks
LOG_FILE="/var/log/jira-monitor.log"  # Log file location

# Function to log messages
log_message() {
    echo "$(date +'%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

# Check Jira service status using the jira status command
check_service_status() {
    $JIRA_STATUS_CMD | grep -q "Running"  # Adjust based on actual output
    return $?
}

# Check if Jira is reachable in the browser
check_jira_reachable() {
    curl -s --max-time "$CHECK_TIMEOUT" "$JIRA_URL" > /dev/null
    return $?
}

# Restart Jira service
restart_jira() {
    log_message "Jira service is down or unreachable. Attempting to restart."
    systemctl restart "$SERVICE_NAME"
    if [ $? -eq 0 ]; then
        log_message "Jira service restarted successfully."
    else
        log_message "Failed to restart Jira service."
    fi
}

# Main logic with continuous monitoring
log_message "Starting Jira monitoring script."

while true; do
    # Perform the first check (service status)
    if check_service_status; then
        log_message "Jira service is running."
    else
        log_message "Jira service is not running."
        restart_jira
        continue  # Skip to the next loop iteration to recheck
    fi

    # Perform the second check (reachability)
    if check_jira_reachable; then
        log_message "Jira is reachable in the browser."
    else
        log_message "Jira is not reachable in the browser."
        restart_jira
        continue
    fi

    # Both checks passed, wait for the next interval
    log_message "Jira is running and reachable. Next check in $RECHECK_INTERVAL minutes."
    sleep $((RECHECK_INTERVAL * 60))
done
```

### How It Works

1. **Check Service Status**:
   - Runs the `jira status` command and looks for the keyword "Running" (adjust this based on your Jira setup).

2. **Check Reachability**:
   - Uses `curl` to verify that the Jira URL responds within the specified timeout.

3. **Restart and Recheck**:
   - If either check fails, the script attempts to restart the service and logs the outcome.
   - Skips the delay to immediately recheck the status after a restart.

4. **Continuous Monitoring**:
   - The script runs in an infinite loop with a configurable delay (`RECHECK_INTERVAL`) between checks.

### Usage

1. Save the script to a file, e.g., `jira_monitor_enhanced.sh`.
2. Make it executable:
   ```bash
   chmod +x jira_monitor_enhanced.sh
   ```
3. Run the script manually or set it up as a background service (e.g., using `nohup` or a systemd service).

### Running as a Service

To run this script as a systemd service, create a service file:

#### `/etc/systemd/system/jira-monitor.service`
```ini
[Unit]
Description=Jira Monitoring Script
After=network.target

[Service]
ExecStart=/path/to/jira_monitor_enhanced.sh
Restart=always
User=root

[Install]
WantedBy=multi-user.target
```

Reload systemd and enable the service:
```bash
systemctl daemon-reload
systemctl enable jira-monitor.service
systemctl start jira-monitor.service
```

### Benefits
- Automates both service-level and application-level checks.
- Ensures high availability during planned time off.
- Logs all activities for later review.

This script can run indefinitely, ensuring Jira is always up and accessible to users.
