## GitHub Copilot Chat

- Extension Version: 0.22.4 (prod)
- VS Code: vscode/1.95.0
- OS: Mac

## Network

User Settings:

```json
  "github.copilot.advanced": {
    "debug.useElectronFetcher": true,
    "debug.useNodeFetcher": false
  }
```

Connecting to https://api.github.com:

- DNS ipv4 Lookup: 20.217.135.0 (149 ms)
- DNS ipv6 Lookup: ::ffff:20.217.135.0 (1 ms)
- Electron Fetcher (configured): timed out after 10 seconds
- Node Fetcher: HTTP 200 (66 ms)
- Helix Fetcher: HTTP 200 (289 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:

- DNS ipv4 Lookup: 140.82.113.22 (64 ms)
- DNS ipv6 Lookup: ::ffff:140.82.113.22 (2 ms)
- Electron Fetcher (configured): timed out after 10 seconds
- Node Fetcher: HTTP 200 (454 ms)
- Helix Fetcher: HTTP 200 (463 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).
