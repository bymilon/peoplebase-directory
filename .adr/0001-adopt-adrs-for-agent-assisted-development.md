---
kind: Document
type: adr
title: "Adopt ADRs for Agent-Assisted Development"
status: accepted
date: 2026-06-30
supersedes: ""
superseded_by: ""
---

# Adopt ADRs for Agent-Assisted Development

## Status

Accepted

## Context

As software projects grow in complexity, retaining the reasoning behind significant architectural decisions becomes challenging. This is especially true when AI coding agents assist in the development process, as they need clear, accessible context to align with the project's technical direction. Without a structured record, knowledge is lost in chat histories, commit messages, or ephemeral memory.

## Decision

We will adopt Architecture Decision Records (ADRs) to document significant technical decisions. These ADRs will be stored as an Open Knowledge Format (OKF) bundle in the `.adr/` directory. Each record will consist of a single Markdown file with YAML frontmatter, capturing the context, decision, consequences, and considered alternatives.

## Consequences

-   **Easier Onboarding:** New human developers and AI agents can quickly understand the architectural constraints and history.
-   **Agent Alignment:** AI agents will use the ADRs as persistent context to make aligned technical choices.
-   **Maintenance:** Requires discipline to write and update ADRs when significant decisions are made.
-   **Append-Only:** Historical context is preserved, as decisions are never overwritten but explicitly superseded by new ADRs.

## Alternatives Considered

-   **No formal documentation:** Relying on code, commit messages, and agent memory. Rejected because it lacks durability and searchability.
-   **External wikis (Confluence, Notion):** Rejected because they are disconnected from the codebase and harder for AI agents to natively index and reference alongside the code.
-   **Custom non-OKF format:** Rejected in favor of the standardized Open Knowledge Format (OKF) to ensure broad compatibility and clear metadata structures.
