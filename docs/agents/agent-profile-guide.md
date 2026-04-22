# Agent Profile Guide

## Purpose
The Agent Context Profile is the canonical onboarding and governance record for agents operating inside ACC.

## Required Flow
1. Create profile JSON from template.
2. Validate against schemas/agent-context-profile.schema.json.
3. Store approved profile in registry.
4. Apply authority policies.
5. Activate agent in approved environment.

## Key Sections
- agent_identity: identity, class, environment
- mission_context: purpose and role
- legal_context: scope and restrictions
- workflow_context: expected steps and outputs
- human_sync_point: escalation owner
- ethical_safeguards: boundaries and containment
- memory_protocol: logs and retention

## Governance Rules
- No self-authorization for privileged actions.
- High-risk actions require approval.
- Production requires full logging and auth.
- Gregorian UTC timestamps remain canonical.

## Validation Example
Use AJV or equivalent validator in acc-api before persisting profiles.

## File Locations
- schemas/agent-context-profile.schema.json
- templates/agent-profile.example.json
- policies/*.json
