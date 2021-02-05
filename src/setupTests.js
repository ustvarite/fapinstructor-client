import "@testing-library/jest-dom";
import "jest-styled-components";
import throwOnConsoleError from "test/throwOnConsoleError";
import "@auth0/auth0-react";
import faker from "faker";
import mockdate from "mockdate";

// Seed faker so it generates deterministic fake data
faker.seed(123);
// Mock the current date
mockdate.set("November 22, 2020 04:19:00");

global.fetch = require("jest-fetch-mock");
global.context = {};

throwOnConsoleError();
