# Test-Template
This is a test template that can be used for tests in project, both automated end-to-end- and API- tests and manual tests. it also includes documentations and CI/CD itegrations

# End-to-end tests
Temaplate for use playwright and page object model (POM) structure. 
Configurated to run on multiply browsers  

# API-test
template how to use Playwright for API tests

# Manual testing
Documents for how to work with test strategy and test plan. 

# Document structure
    /docs # QA documentation (strategy, plans, checklists) 

    /tests 

    /e2e # End-to-end tests 
      /api # API tests 
      /fixtures # Shared test setup 
      /src # Helpers, clients, utilities 
      /config # Environment configs & test data 

    /.github/workflows # CI/CD pipelines

## Creating a New Playwright Test

1. **Create or Update a Page Object:**
    - If your test interacts with a new page or UI element, add a new file under `/pages` following the existing structure.
      Define selectors and methods for the required actions.

2. **Write the Test Spec:**
    - Add a new `.spec.tsx` file in `/tests/e2e`.
    - Import the relevant page objects and use their methods to interact with the application.
    - Use Playwright's test runner (`test`, `expect`, etc.) to define your test steps and assertions.

3. **Handle Authentication:**
    - If your test requires a specific user role, use the appropriate storage state file from `/tests/e2e/auth` (e.g., `employeeStorageState.json`).
    - For tests involving user invitations or role changes, utilize or update `inviteData.json` as needed.

4. **Run the Tests:**
    - Use the Playwright UI to execute tests (Recommended):
      ```sh
      npx playwright test --ui
      ```
    - Review results in the terminal or the Playwright HTML report.

    - Or use the Playwright CLI to execute tests:
      ```sh
      npx playwright test
      ```
    - Review results in the terminal or the Playwright HTML report.

    - Or if you want to use Playwright to find locators or record a flow (actions), use:
      ```sh
      npx playwright codegen
      ```
