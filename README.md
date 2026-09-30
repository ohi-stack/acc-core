# ACC Core

ACC Core is the shared control-plane contract layer for the canonical ACC™ platform at `https://acc.onegodian.com`.

## Canonical role

ACC Core defines reusable contracts for:

- project-centered delegation
- persistent responsibilities
- auditable work orders
- execution-provider identity and maturity
- agent registry and capabilities
- task coordination
- workflow state
- execution governance
- approvals and authority boundaries
- audit and verification metadata
- Oru’Valen™ decision-support requests
- OMOS™ integration records

ACC Core does not independently execute privileged work and does not create authority.

## ACC V2 foundation contracts

The V2 foundation introduces the durable operating chain:

```text
Projects
→ Responsibilities
→ Work Orders
→ Delegation
→ Execution
→ Approval
→ Verification
→ Deployment
→ Audit
```

New shared schemas:

- `schemas/execution-provider.schema.json`
- `schemas/work-order.schema.json`
- `schemas/responsibility.schema.json`

The execution-provider schema deliberately keeps `openai-dot` in `reserved` maturity with `executable=false`. That identifier is a future compatibility boundary, not a claim that ACC can currently execute a Dot.

## Authority model

```text
Authorized Human Judgment
→ Oru’Valen / OMOS decision support
→ ACC
→ Project / Responsibility / Work Order context
→ OCP policy + authorization
→ OEG governed execution
→ approved providers / agents / tools / adapters
→ verification + audit
```

Human authority remains final for privileged actions.

## Source of truth

The primary ACC platform repository is `ohi-stack/acc`. This repository is a shared module and must remain compatible with the versioned contracts declared there.

## Synchronization status

- Production ACC baseline: `v1.3.0`
- ACC V2 delegation foundation: `2.0.0-alpha.1` pre-release
- Contract synchronization date: September 29, 2026

The V2 designation remains pre-release until the work-order/responsibility model is operational, documented, repeatable, verified, and deployed.
