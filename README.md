# Group Review Configuration

A React + Vite single-page UI for the "Group Review Configuration" step (Step 5 of 6) of an internal Maybank corporate banking application workflow. It lets a Relationship Manager decide whether an application needs group review, select or create a customer group, and manage the parent/child application structure within that group.

## Features

- Select an existing customer group or create a new one
- View and manage a group's parent/child application hierarchy
- Add or remove child applications, with conflict detection when an application already belongs to another group
- Change the parent application, with a confirmation flow that locks the structure pending approval
- Per-group structure data — each group shows its own parent application, owner, dates, and child applications
- Audit trail drawer showing the history of actions taken on the application
- Confirmation dialog before submitting for review, with both "Save as Draft" and "Review & Submit" disabled until a group is selected

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

Run `npm run build` to produce a production build.
