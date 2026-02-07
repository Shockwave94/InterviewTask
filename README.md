# InterviewTask — Playwright E2E Tests

## 🧪 Description

This repository contains end-to-end tests for the Swag Labs application using **Playwright** and **TypeScript**. 

---

## Quick start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shockwave94/InterviewTask.git
   cd InterviewTask
2. **Install dependencies**
   ```bash
   npm ci

3. **Install Playwright browsers**
   ```bash
   npx playwright install --with-deps

4. **Run tests locally**
   ```bash
   npx playwright test

5. **Failing test**

   I implemented one test that is failing specifically just to be able to get the screenshots and traces on CI

## Tech Details

1. **About usage of POM**
   Tests are organized with the **Page Object Model (POM)** design pattern to improve maintainability and readability across the test suite.

2. **About usage of POM**
   Tests are organized with the **Page Object Model (POM)** design pattern to improve maintainability and readability across the test suite.

3. **Github Actions**
   Project contains basic implementation of the github actions with all of the necessary steps installation, execution, artifact storage. I Could add way more stuff like linting, sharding of the tests but taking into account scope of this project it obviously does not make sense.

## Reflection & Seniority Check

1. **How would you integrate Playwright tests into CI/CD?**
   If there are testing or staging environments with multiple applications and providers, I would add an optional step in the deployment process to run the Playwright end-to-end tests and, for example, upload the summary to a Slack channel.

   If the infrastructure is more isolated and I can start all necessary components with Docker Compose, including Playwright, I could run the tests on CI/CD agents. In that case, I could execute the tests on every merge request to the release candidate branch, or on-demand for other branches.

2. **How would you notify the team (Slack/Teams) about failures or regressions?**
   Ideally I would like to have this automated - I would integrate the testing pipeline with slack, and this would include for example details about number of tests that failed/passed, link to the CI job artifacts and report summary, if possible stack trace(if it's not too big), add all of the details about the build which this regression run was triggerd against, name of the branch which was used to the test execution, maybe also include the coloring of the message green if everything is fine and red when we have failures.

3. **What observability metrics would you include in an end-to-end quality dashboard?**
   I would integrate the pipeline with for example grafana dashboard that would gather the data about tests stats (failed,passed,flaky,reruns) if perfromance tests would be a part of the regression pack I would also include those details about avrage resposne times, p95/p99, throughput, min/max response times, error rate, I would add a tag to the every test run so it would be easy to filter the dashboard by the specific execution

4. **How would you decide:**
   **What to automate**
      I would automate most of the p1(maybe also p2) flows that transitions to the most common use cases of the system by users. Automate stuff that is just worth it in terms of time saved, risk reduced etc..

   **What not to automate**
      Anything that is flaky, easily causes errors changes constantly I would leave to manual tests (or other layers unit/integration) as this would cause more problems than benefits. I would also no automate anything that requires human judgment like accessibility tests or user experience

   **What belongs to performance vs functional testing**
   Performance testing focuses on how the system performs, how fast it responds, does it fail under the load, does it leak memory, or have high CPU usage things like that, does it scale well (for example creates another pod in k8 when the traffic is high). And this could be achived by different types of testing like load,stress,spike,scalability.

   Functional testing on the other way should verify and validate the product, so if it meets the business specification and also users needs. Obiously this include various types of testing that we should apply like unit,integration, e2e, api, acceptance, smoke, regression testing