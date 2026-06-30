# SOP: Project Metadata Configuration

## Objective
Update the core application configuration and metadata files to reflect the finalized project identity, name, and scope.

## Prerequisites
- Project name and core description have been officially decided.
- Access to the root HTML and manifest files.

## Inputs
- Final project name.
- Final project description.

## Outputs
- Updated `index.html`.
- Updated `metadata.json` (or `package.json` / manifest files depending on the framework).

## Procedure (Checkpoints)
1. **Update HTML Title**: Open the primary entry point (e.g., `index.html`) and modify the `<title>` tag to match the project name.
2. **Update Manifest/Metadata**: Open the project metadata file (e.g., `metadata.json`).
3. **Modify Fields**: Update the `name` and `description` fields. Ensure the description concisely summarizes the app's core purpose.
4. **Preserve Capabilities**: Do NOT modify existing arrays or system configurations like `requestFramePermissions` or `majorCapabilities` unless explicitly required by a new feature.
5. **Verify**: Run the application and confirm the browser tab title has updated and no parsing errors occur in the manifest.

## Failure Modes
- **JSON Syntax Errors**: Breaking the metadata file with trailing commas or unescaped quotes. *Mitigation: Ensure strict JSON formatting is maintained.*
- **Over-editing**: Accidentally removing required system capabilities (like Gemini server-side flags). *Mitigation: Only touch the `name` and `description` fields.*

## Acceptance Criteria
- `<title>` matches the project name.
- Metadata `name` and `description` accurately reflect the project.
- Application builds and runs without errors.

## References
- [SOP: OKF Knowledge Base Initialization](okf-knowledge-base-initialization.md)
- Prompt: `project-metadata.md`
