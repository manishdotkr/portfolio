#!/bin/bash

get_public_ip() {
    public_ip=$(curl -s ifconfig.me) || \
    public_ip=$(curl -s ipinfo.io/ip) || \
    public_ip=$(curl -s api.ipify.org) || \
    public_ip=$(curl -s icanhazip.com)
    
    [ ! -z "$public_ip" ] && echo "Public IP Address:" && echo "  $public_ip"
}

get_local_ips() {
    local_ips=$(ip -4 addr show | grep inet | grep -v '127.0.0.1' | awk '{print $2}' | cut -d'/' -f1)
    if [ ! -z "$local_ips" ]; then
        echo "Local IP Addresses:"
        echo "$local_ips" | while read -r ip; do
            echo "  $ip"
        done
    fi
}



echo "=== IP Address Information ==="
get_public_ip
echo
get_local_ips
