---
name: Release candidate
about: Organize all issues for a release candidate
title: 'auro-menu: [vX.X-rc]'
labels: release
assignees: braven112
---

The following items are to be included with the next feature release of the `auro-menu`, all PRs are to be from the feature branch to `vX.X-rc` branch.

### Groups

>- [ ] #ticketnumber

>- [ ] #ticketnumber

>- [ ] #ticketnumber

## Prepare for the RC work

I. On the `main` branch, be sure to update the `pull_request:` reference that will get checked when PRs are created.

`./.github/workflows/testPublish.yml`

```json
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main, v3.10-rc ]
```



II. When all work is complete with the release candidate branch, as a last commit to the release candidate branch, remove the references to the RC.

See [this commit](https://github.com/AlaskaAirlines/auro-input/commit/7e0e1ced11ba4caebf9b32c1fb95240ba661139a) from the v2.0 RC of auro-input.
