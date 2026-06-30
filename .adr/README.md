---
kind: Bundle
title: Architectural Decision Records
description: A collection of architectural decisions for the application.
version: 1.0.0
---

# Architectural Decision Records (ADRs)

This directory contains Architectural Decision Records (ADRs) for this project, maintained as an Open Knowledge Format (OKF) bundle.

## Purpose

The purpose of this bundle is to capture long-lived architectural decisions in a format that is accessible to both humans and AI coding agents. ADRs document the "why" behind significant technical choices.

## Contribution Workflow

1.  **Drafting:** Copy the `.adr/0000-template.md` to a new file named with a sequential number and a descriptive title (e.g., `0002-use-postgres-for-relational-data.md`).
2.  **Review:** Discuss the proposed decision with the team or agent.
3.  **Acceptance:** Update the status in the frontmatter to `accepted` and merge the ADR.
4.  **Superseding:** ADRs are append-only. To change a past decision, create a new ADR that references and supersedes the old one. Do not rewrite history.

## Scope

-   **Record:** Long-lived, significant architectural decisions.
-   **Do Not Record:** Tasks, meeting notes, implementation logs, temporary context, or minor tactical choices.
