# ACC Core

ACC Core is the shared control-plane contract layer for the canonical ACC™ platform at `https://acc.onegodian.com`.

## Canonical role

ACC Core defines reusable contracts for:

- agent registry and capabilities
- task coordination
- workflow state
- execution governance
- approvals and authority boundaries
- audit and verification metadata
- Oru’Valen™ decision-support requests
- OMOS™ integration records

ACC Core does not independently execute privileged work and does not create authority.

## Authority model

```text
Authorized Human Judgment
→ Oru’Valen / OMOS decision support
→ ACC
→ OCP policy + authorization
→ OEG governed execution
→ agents / tools / adapters
→ verification + audit
```

Human authority remains final for privileged actions.

## Source of truth

The primary ACC platform repository is `ohi-stack/acc`. This repository is a shared module and must remain compatible with the versioned contracts declared there.

## Current synchronization

Synchronized to ACC platform `v1.3.0` architecture on September 16, 2026.
