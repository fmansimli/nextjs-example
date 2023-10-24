# Backporting

## Simple way

Fetch the changes from the remote hotfix branch

```bash
git fetch origin hotfix/issue-123
```

Create a local backport branch based on the remote hotfix branch

```bash
git switch -c backport/issue-123 origin/hotfix/issue-123
```

## Complicated way

creating local backport branch from development or staging

```bash
git switch -c backport/issue-123
```

fetching the remote hotfix branch

```bash
git fetch origin hotfix/issue-123
```

creating local hotfix branch based on remote hotfix branch

```bash
git switch -c local-hotfix-issue-123 origin/hotfix/issue-123
```

switching to local backport branch

```bash
git switch backport/issue-123
```

cherry-picking the local hotfix branch to local backport

```bash
git cherry-pick local-hotfix-branch
```
