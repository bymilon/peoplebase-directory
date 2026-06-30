---
id: adr-0002
title: Establish OKF Knowledge Base, SOPs, and Prompts Library
type: decision
status: accepted
created: 2026-06-30
owner: Engineering
tags: [documentation, workflows, ai-agents]
---

# ADR 0002: OKF Knowledge Base & AI Tooling

## Context
Project knowledge, workflows, and prompts are often lost across different AI sessions or developer onboarding cycles. This leads to repeated mistakes and inconsistent output quality.

## Decision
1. Implement the **Open Knowledge Format (OKF)** in the `.wiki/` directory to serve as the project's "second brain."
2. Extract successful AI interactions into a reusable Prompt Library (`.prompts/library/`).
3. Extract validated human/AI workflows into Standard Operating Procedures (`sops/`).

## Consequences
- **Positive**: Context retention across sessions. Faster onboarding for humans and AI agents.
- **Negative**: Requires discipline to document changes and update these assets continuously.
