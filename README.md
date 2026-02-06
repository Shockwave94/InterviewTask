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

## Tech Details

1. **About usage of POM**
Tests are organized with the **Page Object Model (POM)** design pattern to improve maintainability and readability across the test suite.

2. **Github Actions**
Project contains basic implementation of the github actions with all of the necessary steps installation, execution, artifact storage. I Could add way more stuff like linting, sharding of the tests but taking into account scope of this project it obviously does not make sense.