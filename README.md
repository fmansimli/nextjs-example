## Getting Started

```bash
git switch -c backport/issue-123 # (from development or staging)
```

```bash
git fetch origin hotfix/issue-123 # (fetching the remote hotfix branch)
```

```bash
git switch -c local-hotfix-issue-123 origin/hotfix/issue-123  #(creating local hotfix branch based on remote hotfix branch)
```

```bash
git switch backport/issue-123 # (switching to local backport branch)
```

```bash
git cherry-pick local-hotfix-branch # (cherry-picking the local hotfix branch to local backport)
```
